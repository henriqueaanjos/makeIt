"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ListService {
    async create(title, color, user_id) {
        const list = await prisma_1.default.list.create({
            data: {
                title,
                color,
                published: false
            }
        });
        const list_user = await prisma_1.default.listUser.create({
            data: {
                list_id: list.id,
                user_id
            },
            include: {
                list: true,
                user: true
            }
        });
        return list;
    }
    async update(id, title, color) {
        const list = await prisma_1.default.list.update({
            where: {
                id
            },
            data: {
                title,
                color
            }
        });
        return list;
    }
    async delete(id) {
        const task = await prisma_1.default.task.deleteMany({
            where: {
                list_id: id
            }
        });
        const list_user = await prisma_1.default.listUser.deleteMany({
            where: {
                list_id: id
            }
        });
        const list = await prisma_1.default.list.delete({
            where: {
                id
            }
        });
        return list;
    }
    async publish(id) {
        const list = await prisma_1.default.list.findFirst({
            where: {
                id
            }
        });
        const newTask = await prisma_1.default.list.update({
            where: {
                id
            },
            data: {
                published: !(list === null || list === void 0 ? void 0 : list.published)
            }
        });
        return newTask;
    }
    async share(id, user_id) {
        const users = await prisma_1.default.listUser.findMany({
            where: {
                list_id: id
            }
        });
        const users_id = users.map(u => u.user_id);
        if (!users_id.includes(id)) {
            const list_user = await prisma_1.default.listUser.create({
                data: {
                    list_id: id,
                    user_id
                },
                include: {
                    list: true
                }
            });
            return list_user;
        }
        return { errorCode: "shared.AlreadyExists" };
    }
}
exports.ListService = ListService;

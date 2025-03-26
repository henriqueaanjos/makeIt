"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInfoService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class GetInfoService {
    async byUser(user_id) {
        const listsBrute = await prisma_1.default.listUser.findMany({
            where: {
                user_id
            },
            select: {
                list_id: false,
                user_id: false,
                id: false,
                list: true
            }
        });
        let tasks = await prisma_1.default.task.findMany();
        const lists = listsBrute.map(list => list.list);
        const lists_id = lists.map(list => list.id);
        tasks = tasks.filter(item => lists_id.includes(item.list_id));
        return { lists, tasks };
    }
    async getAllUsers() {
        const users = await prisma_1.default.user.findMany({
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true
            }
        });
        return users;
    }
    async getAllTasksByList(list_id) {
        const list = await prisma_1.default.list.findFirst({
            where: {
                id: list_id
            }
        });
        if (list === null || list === void 0 ? void 0 : list.published) {
            const tasks = await prisma_1.default.task.findMany({
                where: {
                    list_id
                }
            });
            return { list, tasks };
        }
        return { errorCode: "permission.denied" };
    }
    async getUsersFromList(id) {
        const usersShared = await prisma_1.default.listUser.findMany({
            where: {
                list_id: id
            },
            select: {
                id: false,
                list: false,
                list_id: false,
                user_id: false,
                user: true
            }
        });
        const users = usersShared.map(user => user.user);
        return users;
    }
}
exports.GetInfoService = GetInfoService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class TaskService {
    async create(title, date, duration, list_id) {
        const task = await prisma_1.default.task.create({
            data: {
                title,
                date: new Date(date),
                duration,
                list_id,
                finished: false
            },
            include: {
                list: true
            }
        });
        return task;
    }
    async update(id, title, date, duration, list_id) {
        const task = await prisma_1.default.task.update({
            where: {
                id
            },
            data: {
                title,
                date: new Date(date),
                duration,
                list_id
            },
            include: {
                list: true
            }
        });
        return task;
    }
    async delete(id) {
        const task = await prisma_1.default.task.delete({
            where: {
                id
            }
        });
        return task;
    }
    async done(id) {
        const task = await prisma_1.default.task.findFirst({
            where: {
                id
            }
        });
        const newTask = await prisma_1.default.task.update({
            where: {
                id
            },
            data: {
                finished: !(task === null || task === void 0 ? void 0 : task.finished)
            }
        });
        return newTask;
    }
}
exports.TaskService = TaskService;

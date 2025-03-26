"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const TaskService_1 = require("../services/TaskService");
class TaskController {
    async handleCreate(request, response) {
        const { title, date, duration, list_id } = request.body;
        const service = new TaskService_1.TaskService();
        try {
            const result = await service.create(title, date, duration, list_id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Create Task Fail" });
        }
    }
    async handleUpdate(request, response) {
        const { id, title, date, duration, list_id } = request.body;
        const service = new TaskService_1.TaskService();
        try {
            const result = await service.update(id, title, date, duration, list_id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Update Task Fail" });
        }
    }
    async handleDelete(request, response) {
        const { id } = request.params;
        const service = new TaskService_1.TaskService();
        try {
            const result = await service.delete(id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Delete Task Fail" });
        }
    }
    async handleDone(request, response) {
        const { id } = request.body;
        const service = new TaskService_1.TaskService();
        try {
            const result = await service.done(id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Done Task Fail" });
        }
    }
}
exports.TaskController = TaskController;

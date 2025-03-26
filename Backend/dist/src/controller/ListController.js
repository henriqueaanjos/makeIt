"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListController = void 0;
const ListService_1 = require("../services/ListService");
const jsonwebtoken_1 = require("jsonwebtoken");
class ListController {
    async handleCreate(request, response) {
        const { title, color } = request.body;
        const authToken = request.headers.authorization;
        if (!authToken) {
            return response.status(400).json({ error: "Create List Fail" });
        }
        const [, token] = authToken.split(" ");
        const service = new ListService_1.ListService();
        try {
            const { sub } = (0, jsonwebtoken_1.verify)(token, String(process.env.JWT_SECRET));
            const result = await service.create(title, color, sub);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Create List Fail" });
        }
    }
    async handleUpdate(request, response) {
        const { id, title, color } = request.body;
        const service = new ListService_1.ListService();
        try {
            const result = await service.update(id, title, color);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Update List Fail" });
        }
    }
    async handleDelete(request, response) {
        const { id } = request.params;
        const service = new ListService_1.ListService();
        try {
            const result = await service.delete(id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Delete List Fail" });
        }
    }
    async handlePublish(request, response) {
        const { id } = request.body;
        const service = new ListService_1.ListService();
        try {
            const result = await service.publish(id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Publish List Fail" });
        }
    }
    async handleShare(request, response) {
        const { id, user_id } = request.body;
        const service = new ListService_1.ListService();
        try {
            const result = await service.share(id, user_id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Share List Fail" });
        }
    }
}
exports.ListController = ListController;

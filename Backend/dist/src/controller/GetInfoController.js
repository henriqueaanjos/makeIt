"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInfoController = void 0;
const GetInfoService_1 = require("../services/GetInfoService");
const jsonwebtoken_1 = require("jsonwebtoken");
class GetInfoController {
    async handleGetAll(request, response) {
        const authToken = request.headers.authorization;
        if (!authToken) {
            return response.status(400).json({ error: "Create List Fail" });
        }
        const [, token] = authToken.split(" ");
        const service = new GetInfoService_1.GetInfoService();
        try {
            const { sub } = (0, jsonwebtoken_1.verify)(token, String(process.env.JWT_SECRET));
            const result = await service.byUser(sub);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Get Info Fail" });
        }
    }
    async handleGetTasksByList(request, response) {
        const { id } = request.params;
        const service = new GetInfoService_1.GetInfoService();
        try {
            const result = await service.getAllTasksByList(id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Get Tasks Fail" });
        }
    }
    async handleGetAllUsers(request, response) {
        const service = new GetInfoService_1.GetInfoService();
        try {
            const result = await service.getAllUsers();
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Get Users Fail" });
        }
    }
    async handleGetUsersFromList(request, response) {
        const { id } = request.params;
        const service = new GetInfoService_1.GetInfoService();
        try {
            const result = await service.getUsersFromList(id);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Get Users Fail" });
        }
    }
}
exports.GetInfoController = GetInfoController;

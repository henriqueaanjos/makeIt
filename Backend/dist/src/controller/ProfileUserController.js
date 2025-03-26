"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileUserController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const ProfileUserService_1 = require("../services/ProfileUserService");
class ProfileUserController {
    async handle(request, response) {
        const authToken = request.headers.authorization;
        if (!authToken) {
            return response.status(400).json({ error: "Get Profile User Fail" });
        }
        const [, token] = authToken.split(" ");
        const service = new ProfileUserService_1.ProfileUserService();
        try {
            const { sub } = (0, jsonwebtoken_1.verify)(token, String(process.env.JWT_SECRET));
            const result = await service.execute(sub);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Get Profile User Fail" });
        }
    }
}
exports.ProfileUserController = ProfileUserController;

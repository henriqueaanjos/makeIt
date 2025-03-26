"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const AuthenticationService_1 = require("../services/AuthenticationService");
class AuthenticationController {
    async handle(request, response) {
        const { email, password } = request.body;
        const service = new AuthenticationService_1.AuthenticationService();
        try {
            const result = await service.execute(email, password);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Authentication Fail" });
        }
    }
}
exports.AuthenticationController = AuthenticationController;

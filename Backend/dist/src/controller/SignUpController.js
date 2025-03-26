"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpController = void 0;
const SignUpService_1 = require("../services/SignUpService");
class SignUpController {
    async handle(request, response) {
        const { first_name, last_name, email, password } = request.body;
        const service = new SignUpService_1.SignUpService();
        try {
            const result = await service.execute(first_name, last_name, email, password);
            return response.json(result);
        }
        catch (_a) {
            return response.status(400).json({ error: "Sign Up Fail" });
        }
    }
}
exports.SignUpController = SignUpController;

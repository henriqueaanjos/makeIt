"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const CryptographyService_1 = require("./CryptographyService");
const jsonwebtoken_1 = require("jsonwebtoken");
class SignUpService {
    async execute(first_name, last_name, email, password) {
        const cryptography = new CryptographyService_1.Cryptography();
        const passEncrypted = await cryptography.execute(password);
        const user = await prisma_1.default.user.create({
            data: {
                first_name,
                last_name,
                email,
                password: passEncrypted
            }
        });
        const token = (0, jsonwebtoken_1.sign)({ user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name
            } }, String(process.env.JWT_SECRET), {
            subject: user.id,
            expiresIn: "1d"
        });
        return { token, user };
    }
}
exports.SignUpService = SignUpService;

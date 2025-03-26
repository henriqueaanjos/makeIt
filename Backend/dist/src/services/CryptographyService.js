"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cryptography = void 0;
const crypto_1 = __importDefault(require("crypto"));
class Cryptography {
    async execute(password) {
        const data = {
            algoritmo: 'sha256',
            secret: String(process.env.AUTH_SECRET)
        };
        const iv = Buffer.from(crypto_1.default.randomBytes(16));
        const hash = await crypto_1.default.createHmac(data.algoritmo, data.secret);
        let encrypted = await hash.update(password).digest('hex');
        return encrypted;
    }
}
exports.Cryptography = Cryptography;

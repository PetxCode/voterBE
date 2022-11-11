"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const legalVoteSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "users",
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("legalVotes", legalVoteSchema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nameOrEmail: { type: String, required: true },
    pass: { type: String, required: true },
    avatar: String,
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map
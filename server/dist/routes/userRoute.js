"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon = __importStar(require("argon2"));
const express_1 = require("express");
const User_1 = __importDefault(require("../entity/User"));
const user_1 = __importDefault(require("../module/user"));
const route = (0, express_1.Router)();
route.get("/", (_, res) => {
    return res.json(user_1.default.userData);
});
route.post("/reg", async (req, res) => {
    console.log("req ", req.body);
    const options = req.body;
    if (!options.nameOrEmail) {
        res.send({ err: "enter a valid name or email" });
    }
    else if (!options.nameOrEmail.includes("@") &&
        options.nameOrEmail.length < 3) {
        res.send({ err: "length should be greater" });
    }
    else if (options.nameOrEmail.includes("@") &&
        options.nameOrEmail.length < 6) {
        res.send({ err: "Enter a valid email" });
    }
    else if (options.pass.length < 3) {
        res.send({ err: "pass length must be greater than 3" });
    }
    options.pass = await argon.hash(options.pass);
    const user = new User_1.default(options);
    try {
        await user.save();
    }
    catch (err) {
        res.send({ err: "not stored in the db" });
    }
    res.send({ user });
});
route.post("/login", async (req, res) => {
    console.log("req ", req.body);
    const options = req.body;
    if (!options.nameOrEmail) {
        res.send({ err: "enter a valid name or email" });
    }
    else if (!options.nameOrEmail.includes("@") &&
        options.nameOrEmail.length < 3) {
        res.send({ err: "length should be greater" });
    }
    else if (options.nameOrEmail.includes("@") &&
        options.nameOrEmail.length < 6) {
        res.send({ err: "Enter a valid email" });
    }
    else if (options.pass.length < 3) {
        res.send({ err: "pass length must be greater than 3" });
    }
    const user = await User_1.default.findOne({ nameOrEmail: options.nameOrEmail });
    console.log("user after login ->", user);
    if (!user) {
        res.send({ err: "no user found" });
    }
    req.session.qid = user.id;
    console.log("session ", req.session.qid);
    res.send({ user });
});
route.get("/me", async (req, res) => {
    console.log("session", req.session.qid);
    if (req.session.qid === undefined || req.session.qid === null) {
        res.send({ err: "unAuth" });
        res.end();
    }
    const user = await User_1.default.findById(req.session.qid);
    if (!user) {
        res.end({ err: "unAuth" });
    }
    console.log("user ", user);
    res.json({ user });
});
route.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.send(false);
        }
        res.clearCookie();
        res.send(true);
    });
});
exports.default = route;
//# sourceMappingURL=userRoute.js.map
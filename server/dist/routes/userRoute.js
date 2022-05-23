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
const route = (0, express_1.Router)();
route.get("/", async (_, res) => {
    res.json(await User_1.default.find({}));
});
const validate = (nameOrEmail, pass) => {
    if (!nameOrEmail) {
        return { err: "enter a valid name or email" };
    }
    else if (!nameOrEmail.includes("@") && nameOrEmail.length < 3) {
        return { err: "length should be greater" };
    }
    else if (nameOrEmail.includes("@") && nameOrEmail.length < 6) {
        return { err: "Enter a valid email" };
    }
    else if (pass.length < 3) {
        return { err: "pass length must be greater than 3" };
    }
    return null;
};
route.post("/reg", async (req, res) => {
    const options = req.body;
    console.log(options);
    const error = validate(options.nameOrEmail, options.pass);
    console.log(error);
    if (error) {
        res.send({ err: error.err });
        return;
    }
    const isUserExists = await User_1.default.find({ nameOrEmail: options.nameOrEmail });
    console.log(isUserExists);
    if (isUserExists.length > 0) {
        res.send({ err: "user already exits" });
        return;
    }
    options.pass = await argon.hash(options.pass);
    const user = new User_1.default(options);
    try {
        await user.save();
    }
    catch (err) {
        res.send({ err: "not stored in the db" });
        res.end();
    }
    res.send({ user });
});
route.post("/login", async (req, res) => {
    const options = req.body;
    const error = validate(options.nameOrEmail, options.pass);
    if (error) {
        res.send({ err: error.err });
        return;
    }
    const user = await User_1.default.findOne({ nameOrEmail: options.nameOrEmail });
    if (!user) {
        res.send({ err: "no user found" });
        return;
    }
    else if (!(await argon.verify(user.pass, options.pass))) {
        res.send({ err: "password not match" });
        return;
    }
    req.session.qid = user.id;
    res.send({ user });
});
route.get("/me", async (req, res) => {
    if (req.session.qid === undefined || req.session.qid === null) {
        res.send({ err: "unAuth" });
        return;
    }
    const user = await User_1.default.findById(req.session.qid);
    if (!user) {
        res.send({ err: "unAuth" });
        return;
    }
    res.send({ user });
});
route.get("/logout", (req, res) => {
    for (var prop in req.cookies) {
        if (!req.cookies.hasOwnProperty(prop)) {
            continue;
        }
        res.cookie(prop, "", { expires: new Date(0) });
    }
    req.session.destroy((err) => {
        if (err) {
            res.status(404).json({
                errors: ["canr destroy session", "user not found with session id", err],
            });
            return;
        }
        res.end(true);
    });
    res.end(false);
});
exports.default = route;
//# sourceMappingURL=userRoute.js.map
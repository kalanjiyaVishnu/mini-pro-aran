"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../module/user"));
const express_1 = require("express");
const User_1 = __importDefault(require("../entity/User"));
const route = (0, express_1.Router)();
route.get("/", (_, res) => {
    return res.json(user_1.default.userData);
});
route.post("/reg", async (req, res) => {
    console.log("req ", req.body);
    const user = new User_1.default({
        nameOrEmail: "Bill",
        pass: "billooo",
        avatar: "https://i.imgur.com/dM7Thhn.png",
    });
    console.log("user after afddign ->", user);
    const resDdata = user ? { user } : { err: "no user found" };
    res.send({ err: "sad" });
});
route.post("/login", (req, res) => {
    console.log(req.body);
    if (!req.body.name) {
        res.status(300).send({ err: "tyep the duckign mmae" });
    }
    const user = user_1.default.findByName(req.body.name);
    console.log("user after login ->", user);
    if (!user) {
        res.send({ err: "no user found" });
    }
    req.session.qid = user.id;
    console.log("session ", req.session.qid);
    res.send({ user });
});
route.get("/me", (req, res) => {
    res.json(user_1.default.find(req.session.qid));
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
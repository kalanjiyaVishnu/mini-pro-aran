"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../module/user"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/", (_, res) => {
    return res.json(user_1.default.userData);
});
route.post("/reg", (req, res) => {
    console.log("req ", req.body);
    const id = user_1.default.add(req.body);
    const user = user_1.default.find(id);
    console.log("user after afddign ->", user);
    const resDdata = user ? user : { err: "no user found" };
    res.send(resDdata);
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
    res.send(user);
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
//# sourceMappingURL=user.js.map
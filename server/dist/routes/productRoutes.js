"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = __importDefault(require("../entity/Product"));
const route = (0, express_1.Router)();
route.get("/", async (req, res) => {
    res.send(await Product_1.default.find({}));
});
route.get("/add", async (req, res) => {
    res.send("adding the products");
});
route.get("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const product = await Product_1.default.findById(id);
    if (!product) {
        res.send({ err: "no suxh product" });
        return;
    }
    res.send(product);
});
exports.default = route;
//# sourceMappingURL=productRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../entity/User"));
const Product_1 = __importDefault(require("../entity/Product"));
const mail_1 = __importDefault(require("../module/mail"));
const route = (0, express_1.Router)();
const getAllProducts = async (req, res) => {
    res.send(await Product_1.default.find({}));
};
const addProducts = async (req, res) => {
    res.send("adding the products");
};
const checkout = async (req, res) => {
    console.log("body ,", req.body);
    const { uid } = req.body;
    const user = await User_1.default.findById(uid);
    (0, mail_1.default)(user.nameOrEmail, `${uid} is ${user === null || user === void 0 ? void 0 : user.nameOrEmail}`).catch(console.error);
    console.log(user);
    User_1.default.updateOne({ _id: uid }, { $set: { cart: [] } }, { multi: true });
    res.send("adding the products to the cart");
};
const removeFromCart = async (req, res) => {
    console.log("body ,", req.body);
    const { pid, uid } = req.body;
    await User_1.default.updateOne({ _id: uid }, { $pull: { cart: pid } });
    res.send("removed the products to the cart");
};
const addToCart = async (req, res) => {
    var _a;
    console.log("body ,", req.body);
    const { pid, uid } = req.body;
    const user = await User_1.default.findById(uid);
    (_a = user === null || user === void 0 ? void 0 : user.cart) === null || _a === void 0 ? void 0 : _a.push(pid);
    await (user === null || user === void 0 ? void 0 : user.save());
    console.log(user);
    res.send("adding the products to the cart");
};
const getSingleProduct = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const product = await Product_1.default.findById(id);
    if (!product) {
        res.send({ err: "no suxh product" });
        return;
    }
    res.send(product);
};
const getCategory = async (req, res) => {
    const type = req.params.type;
    console.log(type);
    if (!type) {
        res.json({});
    }
    const products = await Product_1.default.find({ category: type });
    if (!products) {
        res.send({ err: "no such cat" });
        return;
    }
    res.json(products);
};
route.get("/", getAllProducts);
route.get("/add", addProducts);
route.post("/addToCart", addToCart);
route.post("/removeFromCart", removeFromCart);
route.post("/checkout", checkout);
route.get("/:id", getSingleProduct);
route.get("/cat/:type", getCategory);
exports.default = route;
//# sourceMappingURL=productRoutes.js.map
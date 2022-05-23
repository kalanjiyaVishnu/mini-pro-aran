"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    thumb: { type: String, required: true },
    desc: { type: String },
    size: { type: [String], default: [] },
    images: { type: [String], default: [] },
    category: { type: [String], default: [] },
}, {
    timestamps: true,
});
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
//# sourceMappingURL=Product.js.map
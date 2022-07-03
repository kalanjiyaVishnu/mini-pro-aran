"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const main = async () => {
    const app = (0, express_1.default)();
    try {
        await (0, mongoose_1.connect)("mongodb+srv://root:root@cluster0.pn567.mongodb.net/?retryWrites=true&w=majority");
    }
    catch (err) {
        console.log("Connection error->", err);
        return;
    }
    (0, dotenv_1.config)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        name: "qid",
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 1000,
        },
        secret: "soemtiosdfads",
        saveUninitialized: false,
        resave: false,
    }));
    app.use("/api/user", userRoute_1.default);
    app.use("/api/products", productRoutes_1.default);
    app.get("/bob", (req, res) => {
        console.log(req.session);
        res.send("bob");
    });
    app.listen(4000, () => {
        console.log("up and running: http://localhost:4000");
    });
};
main();
//# sourceMappingURL=index.js.map
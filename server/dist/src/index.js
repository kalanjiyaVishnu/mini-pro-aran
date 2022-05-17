"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const user_1 = __importDefault(require("./routes/user"));
const dotenv_1 = require("dotenv");
const main = () => {
    const app = (0, express_1.default)();
    (0, dotenv_1.config)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST"],
        credentials: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        name: "qid",
        cookie: {
            maxAge: 60 * 60 * 24,
        },
        secret: "soemtiosdfads",
        saveUninitialized: false,
        resave: false,
    }));
    app.use("/api/user", user_1.default);
    app.get("/bob", (req, res) => {
        console.log(req.session);
        res.send("bob");
    });
    app.listen(4000, () => {
        console.log("up and running");
    });
};
main();
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
async function sendMail(to, content) {
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "l4tugsavscgzezgy@ethereal.email",
            pass: "uPakhMEEfucXTaHaKN",
        },
    });
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to,
        subject: "Hello ✔",
        text: "Hello world?",
        html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>Hey ${to}</h1>
      ${content}
      <p>Out Team will get back to you soon</p>
    </body>
    </html>`,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
}
exports.default = sendMail;
//# sourceMappingURL=mail.js.map
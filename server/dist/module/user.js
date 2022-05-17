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
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = __importStar(require("uuid"));
const userData = new Array();
function add(data) {
    if (userData.find((user) => {
        console.log(user);
        return user.name === data.name;
    })) {
        console.log("already exits");
        return;
    }
    const id = uuid.v4();
    userData.push(Object.assign(Object.assign({}, data), { id }));
    return id;
}
add({
    id: uuid.v4(),
    name: "vishnu@gmail.com",
    pass: "1234",
});
function find(id) {
    return userData.find((user) => user.id === id);
}
function findByName(name) {
    return userData.find((user) => user.name === name);
}
console.log(find("vishnu"));
console.log(userData);
exports.default = { add, find, userData, findByName };
//# sourceMappingURL=user.js.map
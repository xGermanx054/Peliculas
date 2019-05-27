"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControler_1 = __importDefault(require("./../controladores/indexControler"));
class IndexRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexControler_1.default.index);
    }
}
const indexRoute = new IndexRoute();
exports.default = indexRoute.router;

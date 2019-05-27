"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const graficasControlers_1 = require("../controladores/graficasControlers");
class GamesRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', graficasControlers_1.graficasController.list);
    }
}
const gamesRoute = new GamesRoute();
exports.default = gamesRoute.router;

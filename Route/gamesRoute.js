"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControlers_1 = require("../controladores/gamesControlers");
class GamesRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControlers_1.gamesController.list);
        this.router.get('/:id', gamesControlers_1.gamesController.getOne);
        this.router.post('/', gamesControlers_1.gamesController.create);
        this.router.delete('/:id', gamesControlers_1.gamesController.delete);
        this.router.put('/:id', gamesControlers_1.gamesController.update);
    }
}
const gamesRoute = new GamesRoute();
exports.default = gamesRoute.router;

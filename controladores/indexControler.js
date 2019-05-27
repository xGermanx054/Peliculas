"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'lA API ESTA EN OTRA RUTA' });
    }
}
const indexController = new IndexController();
exports.default = indexController;

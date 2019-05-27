"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoute_1 = __importDefault(require("./Route/indexRoute"));
const gamesRoute_1 = __importDefault(require("./Route/gamesRoute"));
const graficasRoute_1 = __importDefault(require("./Route/graficasRoute"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const database_1 = __importDefault(require("./database"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.sockets();
    }
    sockets() {
        return __awaiter(this, void 0, void 0, function* () {
            this.io.on('connect', (cliente) => {
                console.log(cliente.id);
                cliente.on('pedir', () => __awaiter(this, void 0, void 0, function* () {
                    this.hola = yield database_1.default.query('SELECT * FROM pelis');
                    this.tama = this.hola.length;
                    this.io.emit('retorno-lista', this.tama);
                }));
            });
        });
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoute_1.default);
        this.app.use('/api/games', gamesRoute_1.default);
        this.app.use('/graficas', graficasRoute_1.default);
    }
    start() {
        this.httpServer.listen(this.app.get('port'), () => {
            console.log("Server corriendo en puerto 3000");
        });
    }
}
const server = new Server();
server.start();

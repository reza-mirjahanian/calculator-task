"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const constants_1 = require("./constants");
const logger_1 = __importDefault(require("./utils/logger"));
const calculator_1 = __importDefault(require("./services/calculator"));
const input_normalize_1 = require("./services/input.normalize");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: '*',
}));
const server = app.listen(constants_1.SERVER_PORT, () => logger_1.default.log(`✅  Ready on  ${constants_1.SERVER_URL}:${constants_1.SERVER_PORT}`));
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    },
});
io.on('connection', (socket) => {
    // Todo handle multi clients, like hash table
    // Todo refactor to a manager class
    console.log('a user connected');
    const calculator = new calculator_1.default();
    socket.on('client.btnPressed', (msg) => {
        console.log('client.btnPressed');
        if (msg && msg.data) {
            const { data: { operation, digits } } = msg;
            const normalizeOp = (0, input_normalize_1.normalize)(operation);

            const normalizeDigits = (0, input_normalize_1.normalize)(digits);
            if (normalizeDigits && normalizeOp) {
                if (normalizeOp.value === 'AC') {
                    calculator.reset();
                }
                else {
                    calculator.insertItem(normalizeDigits);
                    calculator.insertItem(normalizeOp);
                    const result = calculator.peek();
                    // send error too
                    if (result) {
                        socket.emit('server.response', {
                            data: {
                                result,
                            },
                            status: 'OK',
                        });
                    }
                }
            }
        }
        // socket.emit("message", msg);
        // io.emit("message", msg);
    });
});
//# sourceMappingURL=server.js.map

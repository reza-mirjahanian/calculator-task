"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.SERVER_URL = exports.SERVER_PORT = void 0;
// const isTestMode = process.env.NODE_ENV === 'test';
const NODE_ENV = process.env.NODE_ENV || 'development';
exports.NODE_ENV = NODE_ENV;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost';
exports.SERVER_URL = SERVER_URL;
const SERVER_PORT = process.env.SERVER_PORT || 30100;
exports.SERVER_PORT = SERVER_PORT;
//# sourceMappingURL=constants.js.map
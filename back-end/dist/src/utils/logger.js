"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @todo use better Logger
exports.default = {
    log: (message = '') => {
        console.error(`#Log: ${message}`);
    },
    error: (message = 'Error!') => {
        console.error(`#Error: ${message}`);
    },
};
//# sourceMappingURL=logger.js.map
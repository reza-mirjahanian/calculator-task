"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./server");
// Caught other errors
process
    .on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at Promise', {
        reason,
        p,
    });
})
    .on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown', {
        err,
    });
});
//# sourceMappingURL=index.js.map
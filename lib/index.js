"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(ms, v) {
    return new Promise((resolve) => setTimeout(() => resolve(v), ms));
}
exports.delay = delay;

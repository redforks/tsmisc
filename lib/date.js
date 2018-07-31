"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function today() {
    const now = new Date(Date.now());
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
exports.today = today;

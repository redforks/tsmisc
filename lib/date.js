"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function today() {
    const now = new Date(Date.now());
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
exports.today = today;
function padTwo(n) {
    return n.toString().padStart(2, '0');
}
function toYearMonthDay(d) {
    return `${d.getFullYear()}-${padTwo(d.getMonth() + 1)}-${padTwo(d.getDate())}`;
}
exports.toYearMonthDay = toYearMonthDay;

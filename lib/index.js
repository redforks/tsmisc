"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("./config"), exports);
tslib_1.__exportStar(require("./strings"), exports);
tslib_1.__exportStar(require("./date"), exports);
function delay(ms, v) {
    return new Promise((resolve) => setTimeout(() => resolve(v), ms));
}
exports.delay = delay;
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
exports.guid = guid;

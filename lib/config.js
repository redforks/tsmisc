"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const defaultConfig = {
    app: {
        title: 'title not set',
        codeName: 'codeName not set',
    },
};
let option = defaultConfig;
function setConfig(cfg) {
    option = ramda_1.mergeDeepRight(option, cfg);
}
exports.setConfig = setConfig;
function getConfig() {
    return option;
}
exports.getConfig = getConfig;

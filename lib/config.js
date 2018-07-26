"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const defaultConfig = {
    app: {
        title: 'title not set',
        codeName: 'codeName not set',
    },
};
let option = defaultConfig;
function setConfig(cfg) {
    option = lodash_1.merge(option, cfg);
}
exports.setConfig = setConfig;
function config() {
    return option;
}
exports.config = config;

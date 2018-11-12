"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("lodash/fp/merge");
const defaultConfig = {
    app: {
        title: 'title not set',
        codeName: 'codeName not set',
    },
};
let option = defaultConfig;
function setConfig(cfg) {
    option = merge_1.default(option, cfg);
}
exports.setConfig = setConfig;
function getConfig() {
    return option;
}
exports.getConfig = getConfig;

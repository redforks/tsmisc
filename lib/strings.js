"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertAt(s, idx, sAdd) {
    return s.substr(0, idx) + sAdd + s.substr(idx);
}
exports.insertAt = insertAt;
function removeAt(s, index, stringLength) {
    let resultStr = s;
    if (index >= 0 && index < s.length && stringLength > 0) {
        resultStr =
            s.substr(0, index) +
                s.substr(index + stringLength, s.length - index - stringLength);
    }
    return resultStr;
}
exports.removeAt = removeAt;

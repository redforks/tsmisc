"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strings_1 = require("./strings");
it('insertAt', () => {
    expect(strings_1.insertAt('', 0, '')).toBe('');
    expect(strings_1.insertAt('', 100, 'a')).toBe('a');
    expect(strings_1.insertAt('123', 0, 'a')).toBe('a123');
    expect(strings_1.insertAt('123', 3, 'a')).toBe('123a');
    expect(strings_1.insertAt('123', 1, 'a')).toBe('1a23');
    expect(strings_1.insertAt('123', 10, 'a')).toBe('123a');
});

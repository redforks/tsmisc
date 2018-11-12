"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
it('ui.title', () => {
    config_1.setConfig({
        app: {
            title: 'foo',
        },
        test: {
            foo: { bar: 'foobar', misc: 'origin' },
            Counts: 3,
        },
    });
    expect(config_1.getConfig().app.title).toEqual('foo');
    expect(config_1.getConfig().test.foo).toEqual({ bar: 'foobar', misc: 'origin' });
    config_1.setConfig({
        test: {
            foo: { bar: 'blah' },
        },
    });
    expect(config_1.getConfig().app.title).toEqual('foo');
    expect(config_1.getConfig().test.foo).toEqual({ bar: 'blah', misc: 'origin' });
});

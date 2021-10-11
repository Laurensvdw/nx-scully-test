"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
function blogIdPlugin(route, config = {}) {
    return Promise.resolve([
        { route: '/blogs/testing' },
        { route: '/blogs/testing-bananas' }
    ]);
}
scully_1.registerPlugin('router', 'blogIds', blogIdPlugin);
//# sourceMappingURL=blogs-plugin.js.map
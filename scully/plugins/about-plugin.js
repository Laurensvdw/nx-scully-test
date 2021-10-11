"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
function aboutIdPlugin(route, config = {}) {
    return Promise.resolve([
        { route: '/about/4' },
        { route: '/about/5' },
        { route: '/about/6' },
        { route: '/about/7' },
        { route: '/about/8' },
    ]);
}
scully_1.registerPlugin('router', 'aboutIds', aboutIdPlugin);
//# sourceMappingURL=about-plugin.js.map
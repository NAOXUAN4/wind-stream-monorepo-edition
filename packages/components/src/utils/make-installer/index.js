"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInstaller = void 0;
exports.withInstall = withInstall;
function withInstall(component) {
    component.install = function (app) {
        var name = component.name;
        if (name) {
            app.component(name, component);
        }
    };
    return component;
}
var makeInstaller = function (components) {
    if (components === void 0) { components = []; }
    var install = function (app) {
        components.forEach(function (c) { return app.use(c); });
    };
    return {
        install: install,
        version: '0.0.1'
    };
};
exports.makeInstaller = makeInstaller;

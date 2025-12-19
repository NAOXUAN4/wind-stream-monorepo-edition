"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = exports.WsMessage = exports.WsDropDown = exports.WsToolTip = exports.WsToast = exports.WsCollapseItem = exports.WsCollapse = exports.WsIcon = exports.WsButton = void 0;
var make_installer_1 = require("./utils/make-installer");
var Button_vue_1 = require("./Button/Button.vue");
exports.WsButton = Button_vue_1.default;
var Icon_vue_1 = require("./Icon/Icon.vue");
exports.WsIcon = Icon_vue_1.default;
var Collapse_vue_1 = require("./Collapse/Collapse.vue");
exports.WsCollapse = Collapse_vue_1.default;
var CollapseItem_vue_1 = require("./Collapse/CollapseItem.vue");
exports.WsCollapseItem = CollapseItem_vue_1.default;
var Toast_vue_1 = require("./Toast/Toast.vue");
exports.WsToast = Toast_vue_1.default;
var ToolTip_vue_1 = require("./ToolTip/ToolTip.vue");
exports.WsToolTip = ToolTip_vue_1.default;
var DropDown_vue_1 = require("./DropDown/DropDown.vue");
exports.WsDropDown = DropDown_vue_1.default;
var Message_vue_1 = require("./Message/Message.vue");
exports.WsMessage = Message_vue_1.default;
var method_1 = require("./Message/method");
Object.defineProperty(exports, "createMessage", { enumerable: true, get: function () { return method_1.createMessage; } });
require("./style/vars.scss");
require("./style/index.scss");
var components = [
    (0, make_installer_1.withInstall)(Button_vue_1.default),
    (0, make_installer_1.withInstall)(Icon_vue_1.default),
    (0, make_installer_1.withInstall)(Collapse_vue_1.default),
    (0, make_installer_1.withInstall)(CollapseItem_vue_1.default),
    (0, make_installer_1.withInstall)(Toast_vue_1.default),
    (0, make_installer_1.withInstall)(ToolTip_vue_1.default),
    (0, make_installer_1.withInstall)(DropDown_vue_1.default),
    (0, make_installer_1.withInstall)(Message_vue_1.default),
];
// 导出安装器 (Vue 插件模式)
exports.default = (0, make_installer_1.makeInstaller)(components);

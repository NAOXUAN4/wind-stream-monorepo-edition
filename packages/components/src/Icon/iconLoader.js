"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadCommonIcons = exports.loadIcon = void 0;
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
// 已加载的图标缓存
var loadedIcons = new Set();
// 内置常用图标映射
var builtInIcons = {
    // solid图标
    'fa-solid fa-xmark': free_solid_svg_icons_1.faXmark,
    // regular图标
    'fa-lemon fa-regular': free_regular_svg_icons_1.faLemon
};
/**
 * 按需加载图标
 * @param icon 图标名称或对象，如 'fa-solid fa-xmark' 或 { prefix: 'fas', iconName: 'home' }
 */
var loadIcon = function (icon) {
    // 如果图标是字符串类型
    if (typeof icon === 'string') {
        // 如果图标已加载，直接返回
        if (loadedIcons.has(icon)) {
            return;
        }
        // 检查是否是内置图标
        var iconObj = builtInIcons[icon];
        if (iconObj) {
            // 添加到库中
            fontawesome_svg_core_1.library.add(iconObj);
            // 标记为已加载
            loadedIcons.add(icon);
        }
        else {
            // 对于未知图标，尝试解析图标名称并动态导入
            console.warn("Icon ".concat(icon, " not found in built-in icons. Please import it manually."));
        }
    }
    // 对于其他类型（对象、数组等），不做处理
};
exports.loadIcon = loadIcon;
/**
 * 预加载常用图标
 */
var preloadCommonIcons = function () {
    Object.keys(builtInIcons).forEach(function (iconName) {
        (0, exports.loadIcon)(iconName);
    });
};
exports.preloadCommonIcons = preloadCommonIcons;

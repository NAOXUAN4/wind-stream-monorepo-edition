"use strict";
/// <reference types="E:/proJectLibrary/whisperUI/whisper-ui-monorepo/packages/components/node_modules/.vue-global-types/vue_3.5_0.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var iconLoader_1 = require("./iconLoader");
defineOptions({
    name: "WsIcon",
    inheritAttrs: false /// 阻止透传到root组件（i）
});
var props = defineProps();
// 当icon属性变化时，按需加载图标
(0, vue_1.watch)(function () { return props.icon; }, function (newIcon) {
    if (newIcon) {
        (0, iconLoader_1.loadIcon)(newIcon);
    }
}, { immediate: true });
// 组件挂载时加载图标
(0, vue_1.onMounted)(function () {
    if (props.icon) {
        (0, iconLoader_1.loadIcon)(props.icon);
    }
});
var styleShell4ChageColor = (0, vue_1.computed)(function () {
    return props.color ? { color: props.color } : {};
});
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.i, __VLS_intrinsics.i)(__assign(__assign({ class: "ws-icon" }, { class: (_a = {},
        _a["ws-icon--".concat(__VLS_ctx.type)] = __VLS_ctx.type,
        _a) }), { style: (__VLS_ctx.styleShell4ChageColor) }));
/** @type {__VLS_StyleScopedClasses['ws-icon']} */ ;
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.fontAwesomeIcon | typeof ___VLS_components.FontAwesomeIcon} */
fontAwesomeIcon;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({}, (__VLS_ctx.$props))));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({}, (__VLS_ctx.$props))], __VLS_functionalComponentArgsRest(__VLS_1), false));
// @ts-ignore
[type, type, styleShell4ChageColor, $props,];
var __VLS_export = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
});
exports.default = {};

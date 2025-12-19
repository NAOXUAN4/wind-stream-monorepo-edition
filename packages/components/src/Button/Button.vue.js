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
var Icon_vue_1 = require("../Icon/Icon.vue");
var __VLS_props = withDefaults(//// 设置默认属性
defineProps(), /// 属性接口
{
    nativetype: 'button',
});
var emit = defineEmits();
// @vue 3.3
defineOptions({
    name: "WsButton",
});
/// 将模板绑定_ref，使得可以通过绑定组件实例的 ref 来 与_ref 关联，从而拿到模板的dom
var _ref = (0, vue_1.ref)();
var __VLS_exposed = {
    ref: _ref
};
defineExpose(__VLS_exposed);
var handleClick = function (event) {
    emit('click', event);
};
var __VLS_defaults = {
    nativetype: 'button',
};
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)(__assign(__assign(__assign(__assign({ onClick: (__VLS_ctx.handleClick) }, { class: 'ws-button' }), { ref: "_ref" }), { class: (_a = {},
        _a["ws-button--".concat(__VLS_ctx.type)] = __VLS_ctx.type,
        _a["ws-button--".concat(__VLS_ctx.size)] = __VLS_ctx.size,
        _a['is-plain'] = __VLS_ctx.plain,
        _a['is-round'] = __VLS_ctx.round,
        _a['is-circle'] = __VLS_ctx.circle,
        _a['is-disabled'] = __VLS_ctx.disabled,
        _a['icon'] = __VLS_ctx.icon,
        _a) }), { disabled: (__VLS_ctx.disabled), autofocus: (__VLS_ctx.autofocus), type: (__VLS_ctx.nativetype) }));
/** @type {__VLS_StyleScopedClasses['ws-button']} */ ;
/** @type {__VLS_StyleScopedClasses['is-plain']} */ ;
/** @type {__VLS_StyleScopedClasses['is-round']} */ ;
/** @type {__VLS_StyleScopedClasses['is-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['is-disabled']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
if (__VLS_ctx.icon) {
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    var __VLS_0 = Icon_vue_1.default;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        icon: (__VLS_ctx.icon),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            icon: (__VLS_ctx.icon),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
}
__VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
var __VLS_5 = {};
// @ts-ignore
var __VLS_6 = __VLS_5;
// @ts-ignore
[handleClick, type, type, size, size, plain, round, circle, disabled, disabled, icon, icon, icon, autofocus, nativetype,];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return (__VLS_exposed); },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
var __VLS_export = {};
exports.default = {};

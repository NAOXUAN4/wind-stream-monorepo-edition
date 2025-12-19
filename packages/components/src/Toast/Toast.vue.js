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
var props = withDefaults(defineProps(), {
    closable: false,
    disapper: 2500
});
var isActive = (0, vue_1.ref)(props.modelValue);
defineOptions({
    name: 'WsToast'
});
var emit = defineEmits();
var closeHandler = function () {
    isActive.value = false;
    emit('update:modelValue', isActive.value);
    emit('change:modelValue', isActive.value);
    console.log(isActive.value);
};
(0, vue_1.watch)(function () { return props.modelValue; }, function () {
    return isActive.value = props.modelValue;
});
(0, vue_1.watch)(function () { return isActive.value; }, function () {
    if (isActive.value) {
        setTimeout(function () {
            closeHandler();
        }, props.disapper);
    }
});
var __VLS_defaults = {
    closable: false,
    disapper: 2500
};
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.Teleport} */
Teleport;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "body",
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        to: "body",
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = __VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: 'ws-toast' }, { class: (_a = {},
        _a["ws-toast--".concat(__VLS_ctx.type)] = __VLS_ctx.type,
        _a['is-active'] = __VLS_ctx.isActive,
        _a) }));
/** @type {__VLS_StyleScopedClasses['ws-toast']} */ ;
/** @type {__VLS_StyleScopedClasses['is-active']} */ ;
if (__VLS_ctx.icon) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "ws-toast__icon" }));
    /** @type {__VLS_StyleScopedClasses['ws-toast__icon']} */ ;
    var __VLS_6 = Icon_vue_1.default;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        icon: (__VLS_ctx.icon),
        type: (__VLS_ctx.type),
    }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
            icon: (__VLS_ctx.icon),
            type: (__VLS_ctx.type),
        }], __VLS_functionalComponentArgsRest(__VLS_7), false));
}
if (__VLS_ctx.context) {
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    (__VLS_ctx.context);
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    var __VLS_11 = {};
}
if (__VLS_ctx.closable) {
    __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)(__assign({ onClick: (__VLS_ctx.closeHandler) }, { class: "ws-toast__close" }));
    /** @type {__VLS_StyleScopedClasses['ws-toast__close']} */ ;
    var __VLS_13 = Icon_vue_1.default;
    // @ts-ignore
    var __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        icon: "fa-solid fa-xmark",
        type: (__VLS_ctx.type),
    }));
    var __VLS_15 = __VLS_14.apply(void 0, __spreadArray([{
            icon: "fa-solid fa-xmark",
            type: (__VLS_ctx.type),
        }], __VLS_functionalComponentArgsRest(__VLS_14), false));
}
// @ts-ignore
[type, type, type, type, isActive, icon, icon, context, context, closable, closeHandler,];
var __VLS_3;
// @ts-ignore
var __VLS_12 = __VLS_11;
// @ts-ignore
[];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
var __VLS_export = {};
exports.default = {};

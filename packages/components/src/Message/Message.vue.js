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
var Icon_vue_1 = require("../Icon/Icon.vue");
var vue_1 = require("vue");
var RenderVnode_1 = require("../Common/RenderVnode");
// import { watch } from "vue";
var method_1 = require("./method");
var useEventListener_1 = require("../hooks/useEventListener");
var visible = (0, vue_1.ref)(false);
var messageRef = (0, vue_1.ref)();
var elementHeight = (0, vue_1.ref)(0);
/**
 * 顶部高度
 */
var topOffset = (0, vue_1.computed)(function () {
    return (0, method_1.getLastMessageNodeBottomOffsetById)(props.messageId) + props.offset;
});
var messageStyle = (0, vue_1.computed)(function () {
    var _a;
    return "top: ".concat((_a = topOffset.value) !== null && _a !== void 0 ? _a : 0, "px");
});
/**
 * 底部高度
 */
var bottomOffset = (0, vue_1.computed)(function () { return topOffset.value + elementHeight.value; });
/**
 * 导出bottomOffset
 */
var __VLS_exposed = {
    bottomOffset: bottomOffset
};
defineExpose(__VLS_exposed);
var timer;
/**
 * 延时关闭函数， props.duration 控制
 */
function startTimer() {
    if (props.duration == 0) {
        visible.value = true;
        return;
    }
    timer = setTimeout(function () {
        visible.value = false;
    }, props.duration);
}
/**
 * hover message常亮特性函数
 */
function clearTimer() {
    clearTimeout(timer);
}
/**
 * 手动关闭函数， 服务于 show-close 按钮
 */
function showCloseHandler() {
    visible.value = false;
}
defineOptions({
    name: 'WsMessage'
});
var props = withDefaults(defineProps(), {
    duration: 1000,
    type: 'info',
    offset: 3
});
/**
 * Esc关闭Message特性函数
 */
function keydownHandler(e) {
    var event = e;
    if (event.code == 'Escape') {
        visible.value = false;
    }
}
(0, useEventListener_1.default)(document, 'keydown', keydownHandler);
(0, vue_1.onMounted)(function () {
    visible.value = true;
    startTimer();
    // nextTick(()=> {
    //   elementHeight.value = messageRef.value?.offsetHeight ?? 0;
    // });
});
/**
 * 通过Transition 生命周期钩子控制更新组件本体高度数据
 */
var updateHeight = function () {
    var _a, _b;
    elementHeight.value = (_b = (_a = messageRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0;
};
/**
 * 自动清理函数挂载的 dom
 */
// watch(visible, (val, oldVal) => {
//   if (oldVal === true && val === false && typeof props.onDestory === 'function') {
//   props.onDestory();
//   }
// });
/**
 * 通过Transition 生命周期钩子控制销毁
 */
var destoryComponent = function () {
    props.onDestory();
};
var __VLS_defaults = {
    duration: 1000,
    type: 'info',
    offset: 3
};
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
var __VLS_0;
/** @ts-ignore @type {typeof ___VLS_components.Transition} */
Transition;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign(__assign({ 'onAfterLeave': {} }, { 'onEnter': {} }), { name: "fade-up" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign(__assign({ 'onAfterLeave': {} }, { 'onEnter': {} }), { name: "fade-up" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5;
var __VLS_6 = ({ afterLeave: {} },
    { onAfterLeave: (__VLS_ctx.destoryComponent) });
var __VLS_7 = ({ enter: {} },
    { onEnter: (__VLS_ctx.updateHeight) });
var __VLS_8 = __VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign(__assign(__assign({ onMouseenter: (__VLS_ctx.clearTimer) }, { onMouseleave: (__VLS_ctx.startTimer) }), { class: 'ws-message' }), { ref: "messageRef", role: "alert" }), { style: (__VLS_ctx.messageStyle) }), { class: (_a = {},
        _a["ws-message--".concat(__VLS_ctx.type)] = __VLS_ctx.type,
        _a['is-close'] = __VLS_ctx.showClose,
        _a) }));
__VLS_asFunctionalDirective(___VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.visible) }), null, null);
/** @type {__VLS_StyleScopedClasses['ws-message']} */ ;
/** @type {__VLS_StyleScopedClasses['is-close']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "ws-message__content" }));
/** @type {__VLS_StyleScopedClasses['ws-message__content']} */ ;
var __VLS_9 = {};
var __VLS_11;
/** @ts-ignore @type {typeof ___VLS_components.RenderVnode} */
RenderVnode_1.default;
// @ts-ignore
var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    vNode: (__VLS_ctx.message),
}));
var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{
        vNode: (__VLS_ctx.message),
    }], __VLS_functionalComponentArgsRest(__VLS_12), false));
if (__VLS_ctx.showClose) {
    __VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ onClick: (__VLS_ctx.showCloseHandler) }, { class: "ws-message__close" }));
    /** @type {__VLS_StyleScopedClasses['ws-message__close']} */ ;
    var __VLS_16 = Icon_vue_1.default;
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        icon: "fa-solid fa-xmark",
    }));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{
            icon: "fa-solid fa-xmark",
        }], __VLS_functionalComponentArgsRest(__VLS_17), false));
}
// @ts-ignore
[destoryComponent, updateHeight, clearTimer, startTimer, messageStyle, type, type, showClose, showClose, visible, message, showCloseHandler,];
var __VLS_3;
var __VLS_4;
// @ts-ignore
var __VLS_10 = __VLS_9;
// @ts-ignore
[];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return (__VLS_exposed); },
    __typeProps: {},
    props: {},
});
var __VLS_export = {};
exports.default = {};

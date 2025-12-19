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
var core_1 = require("@popperjs/core");
var useClickOutside_1 = require("../hooks/useClickOutside");
var lodash_es_1 = require("lodash-es");
var props = withDefaults(defineProps(), {
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    changeDelay: 0,
    minWidth: undefined, // 最小宽度
    maxWidth: 200, // 最大宽度
    autoWidth: false // 是否自动适应 trigger 宽度
});
defineOptions({
    name: "WsTooltip"
});
var popperOptions = (0, vue_1.computed)(function () {
    return __assign({ placement: props.placement, modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 9]
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: true,
                },
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: 8,
                },
            },
            {
                name: 'flip',
                options: {
                    padding: 8,
                },
            }
        ] }, props.popperOptions);
});
var emits = defineEmits();
var isActive = (0, vue_1.ref)((_a = props.modelValue) !== null && _a !== void 0 ? _a : false);
var poperInstance = null;
var tooltiprootNode = (0, vue_1.ref)();
var poperNode = (0, vue_1.ref)();
var triggerNode = (0, vue_1.ref)();
/**
 * 点击trigger 外部关闭逻辑
 */
(0, useClickOutside_1.default)(tooltiprootNode, function () {
    if (props.trigger == 'click') {
        onActiveChangeDebounce(false);
    }
});
/**
 * 显示隐藏统一接口， 操作 内部 isActive 变量值 以及 emit v-model的值
 *
 * @param e
 */
var onActiveChange = function (e) {
    isActive.value = e;
    emits('update:modelValue', isActive.value);
    emits('change:modelValue', isActive.value);
};
/**
 * debounce 封装延时
 *
 */
var onActiveChangeDebounce = (0, lodash_es_1.debounce)(function (e) { return onActiveChange(e); }, props.changeDelay);
/**
 * 触发操作的统一Api 接口，适配多种触发方式
 * @param isLeave
 */
var triggerHandler = function (isLeave) {
    if (props.trigger == 'click') {
        onActiveChangeDebounce(!isActive.value);
        console.log(props);
    }
    else if (props.trigger == 'hover') {
        onActiveChangeDebounce(isLeave ? false : true);
    }
    // emits('visible-change', isActive.value);
};
// v - model， 对上级变化的监听，监听props改变，同步本地变量
(0, vue_1.watch)(function () { return props.modelValue; }, function (newValue) {
    isActive.value = newValue;
});
(0, vue_1.watch)(isActive, function (newValue) {
    if (triggerNode.value && poperNode.value && newValue) {
        // 更新 popper 配置以支持宽度控制
        // const updatedOptions = {
        //   ...popperOptions.value,
        //   modifiers: [
        //     ...(popperOptions.value.modifiers || []),
        //     {
        //       name: 'minWidth',
        //       enabled: true,
        //       phase: 'beforeWrite',
        //       requires: ['computeStyles'],
        //       fn: ({ state }: { state: any }) => {
        //         const popperState = state;
        //         if (props.minWidth) {
        //           popperState.styles.popper.minWidth = `${props.minWidth}px`;
        //         }
        //         if (props.maxWidth) {
        //           popperState.styles.popper.maxWidth = `${props.maxWidth}px`;
        //         }
        //         if (props.autoWidth && triggerNode.value) {
        //           popperState.styles.popper.width = `${triggerNode.value.offsetWidth}px`;
        //         }
        //       }
        //     }
        //   ]
        // };
        poperInstance = (0, core_1.createPopper)(triggerNode.value, poperNode.value, popperOptions.value);
    }
    else {
        poperInstance === null || poperInstance === void 0 ? void 0 : poperInstance.destroy();
    }
}, { flush: 'post' });
/**
 * 显示函数接口，暴露v-model 的Api
 */
function showhandler() {
    if (props.trigger == 'manaul') {
        onActiveChangeDebounce(true);
    }
}
/**
 * 隐藏函数接口，暴露v-model 的Api
 */
function hidehandler() {
    if (props.trigger == 'manaul') {
        onActiveChangeDebounce(false);
    }
}
var __VLS_exposed;
defineExpose({
    'show': showhandler,
    'hide': hidehandler
});
(0, vue_1.onUnmounted)(function () {
    if (poperInstance) {
        poperInstance === null || poperInstance === void 0 ? void 0 : poperInstance.destroy();
    }
});
var __VLS_defaults = {
    placement: 'bottom',
    trigger: 'hover',
    transition: 'fade',
    changeDelay: 0,
    minWidth: undefined, // 最小宽度
    maxWidth: 200, // 最大宽度
    autoWidth: false // 是否自动适应 trigger 宽度
};
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign(__assign({ onMouseenter: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        props.trigger == 'hover' ? __VLS_ctx.triggerHandler(false) : null;
        // @ts-ignore
        [triggerHandler,];
    } }, { onMouseleave: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        props.trigger == 'hover' ? __VLS_ctx.triggerHandler(true) : null;
        // @ts-ignore
        [triggerHandler,];
    } }), { class: 'ws-tooltip' }), { ref: "tooltiprootNode" }));
/** @type {__VLS_StyleScopedClasses['ws-tooltip']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: function () {
        var _a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _a[_i] = arguments[_i];
        }
        var $event = _a[0];
        props.trigger == 'click' ? __VLS_ctx.triggerHandler() : null;
        // @ts-ignore
        [triggerHandler,];
    } }, { class: "ws-tooltip__trigger" }), { ref: "triggerNode" }));
/** @type {__VLS_StyleScopedClasses['ws-tooltip__trigger']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
var __VLS_0 = {};
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "ws-tooltip__popper" }, { ref: "poperNode" }));
__VLS_asFunctionalDirective(___VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isActive) }), null, null);
/** @type {__VLS_StyleScopedClasses['ws-tooltip__popper']} */ ;
var __VLS_2;
/** @ts-ignore @type {typeof ___VLS_components.Transition} */
Transition;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
    name: (__VLS_ctx.transition),
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        name: (__VLS_ctx.transition),
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
var __VLS_7 = __VLS_5.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalDirective(___VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isActive) }), null, null);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
var __VLS_8 = {};
(__VLS_ctx.content);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "arrow",
});
// @ts-ignore
[isActive, isActive, transition, content,];
var __VLS_5;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_9 = __VLS_8;
// @ts-ignore
[];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () { return (__VLS_exposed); },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
var __VLS_export = {};
exports.default = {};

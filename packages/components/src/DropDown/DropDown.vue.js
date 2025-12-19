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
Object.defineProperty(exports, "__esModule", { value: true });
var ToolTip_vue_1 = require("../ToolTip/ToolTip.vue");
var vue_1 = require("vue");
var RenderVnode_1 = require("../Common/RenderVnode");
var emits = defineEmits();
defineOptions({
    name: "WsDropDown"
});
var props = withDefaults(defineProps(), {
    placement: 'bottom',
    changeDelay: 50
});
/**
 * Emit 选中项， 组件仅处理选择逻辑，后续根据key调用回调在 上层封装 操作
 * @param e
 */
var dropDownItemClickHandler = function (e) {
    if (e.disabled)
        return;
    var ekey = e.key;
    // console.log(ekey);
    emits('update:select', ekey);
    console.log(e);
};
/**
 * 继承ToolTipInstance， 通过ref控制函数 例： DropDown.value.show(), 但是触发模式必须为 manual
 */
var DpToolTipRef = (0, vue_1.ref)(null);
var __VLS_exposed;
defineExpose({
    'show': function () {
        var _a;
        console.log(props.trigger);
        return (_a = DpToolTipRef.value) === null || _a === void 0 ? void 0 : _a.show();
    },
    'hide': function () { var _a; return (_a = DpToolTipRef.value) === null || _a === void 0 ? void 0 : _a.hide(); }
});
var __VLS_defaults = {
    placement: 'bottom',
    changeDelay: 50
};
var __VLS_ctx = __assign(__assign(__assign(__assign(__assign({}, {}), {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "ws-dropdown" }));
/** @type {__VLS_StyleScopedClasses['ws-dropdown']} */ ;
var __VLS_0 = ToolTip_vue_1.default || ToolTip_vue_1.default;
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    changeDelay: (props.changeDelay),
    vModel: (props.modelValue),
    placement: (props.placement),
    changedelay: (props.changeDelay),
    ref: "DpToolTipRef",
    popperOptions: (props.popperOptions),
    trigger: (props.trigger),
}));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
        changeDelay: (props.changeDelay),
        vModel: (props.modelValue),
        placement: (props.placement),
        changedelay: (props.changeDelay),
        ref: "DpToolTipRef",
        popperOptions: (props.popperOptions),
        trigger: (props.trigger),
    }], __VLS_functionalComponentArgsRest(__VLS_1), false));
var __VLS_5 = {};
var __VLS_7 = __VLS_3.slots.default;
var __VLS_8 = {};
{
    var __VLS_10 = __VLS_3.slots.content;
    __VLS_asFunctionalElement(__VLS_intrinsics.ul, __VLS_intrinsics.ul)(__assign({ class: "ws-dropdown__menu" }));
    /** @type {__VLS_StyleScopedClasses['ws-dropdown__menu']} */ ;
    var _loop_1 = function (item) {
        (item.key);
        if (item.divided) {
            __VLS_asFunctionalElement(__VLS_intrinsics.li, __VLS_intrinsics.li)(__assign({ role: "separator" }, { class: "item-separator" }));
            /** @type {__VLS_StyleScopedClasses['item-separator']} */ ;
        }
        __VLS_asFunctionalElement(__VLS_intrinsics.li, __VLS_intrinsics.li)(__assign(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                __VLS_ctx.dropDownItemClickHandler(item);
                // @ts-ignore
                [dropDownItemClickHandler,];
            } }, { class: "ws-dropdown-item" }), { class: ({
                'is-disabled': item.disabled,
                'is-divided': item.divided,
            }) }), { id: ("dropdown-item-".concat(item.key)) }));
        /** @type {__VLS_StyleScopedClasses['ws-dropdown-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['is-disabled']} */ ;
        /** @type {__VLS_StyleScopedClasses['is-divided']} */ ;
        var __VLS_11 = void 0;
        /** @ts-ignore @type {typeof ___VLS_components.RenderVnode} */
        RenderVnode_1.default;
        // @ts-ignore
        var __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
            vNode: (item.label),
        }));
        var __VLS_13 = __VLS_12.apply(void 0, __spreadArray([{
                vNode: (item.label),
            }], __VLS_functionalComponentArgsRest(__VLS_12), false));
        // @ts-ignore
        [];
    };
    for (var _i = 0, _a = __VLS_getVForSourceType((props.DropDownMenuOptions)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        _loop_1(item);
    }
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
var __VLS_6 = __VLS_5, __VLS_9 = __VLS_8;
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

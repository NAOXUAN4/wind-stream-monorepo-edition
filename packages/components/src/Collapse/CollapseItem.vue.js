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
var type_1 = require("./type");
var vue_1 = require("vue");
var Icon_vue_1 = require("../Icon/Icon.vue");
var CollapseProvider = (0, vue_1.inject)(type_1.CollapseProviderKey);
var props = withDefaults(defineProps(), {
    disabled: false
});
var isActive = (0, vue_1.computed)(function () {
    return CollapseProvider === null || CollapseProvider === void 0 ? void 0 : CollapseProvider.ItemActivateList.value.includes(props.name);
});
var handleItemClick = function () {
    if (props.disabled) {
        return;
    }
    CollapseProvider === null || CollapseProvider === void 0 ? void 0 : CollapseProvider.handleItemClick(props.name);
};
defineOptions({
    name: "WsCollapseItem"
});
/// v-on 至 Transition
var transitionEvents = {
    'before-enter': function (el) {
        el.style.height = '0px';
    },
    'enter': function (el) {
        el.style.height = "".concat(el.scrollHeight, "px");
    },
    'after-enter': function (el) {
        el.style.height = '';
    },
    'before-leave': function (el) {
        el.style.height = "".concat(el.scrollHeight, "px");
    },
    'leave': function (el) {
        el.style.height = '0px';
    },
    'after-leave': function (el) {
        el.style.height = '';
    }
};
var __VLS_defaults = {
    disabled: false
};
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: 'ws-collapse-item' }, { class: ({
        'is-disabled': __VLS_ctx.disabled,
        'is-active': __VLS_ctx.isActive
    }) }));
/** @type {__VLS_StyleScopedClasses['ws-collapse-item']} */ ;
/** @type {__VLS_StyleScopedClasses['is-disabled']} */ ;
/** @type {__VLS_StyleScopedClasses['is-active']} */ ;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign(__assign({ onClick: (__VLS_ctx.handleItemClick) }, { class: "ws-collapse__header" }), { id: ("collapse-item-header-".concat(__VLS_ctx.name)) }));
/** @type {__VLS_StyleScopedClasses['ws-collapse__header']} */ ;
var __VLS_0 = {};
(__VLS_ctx.title);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "ws-collapse__icon" }));
/** @type {__VLS_StyleScopedClasses['ws-collapse__icon']} */ ;
var __VLS_2 = Icon_vue_1.default;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
    icon: "fa-solid fa-angle-down",
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        icon: "fa-solid fa-angle-down",
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
var __VLS_7;
/** @ts-ignore @type {typeof ___VLS_components.Transition} */
Transition;
// @ts-ignore
var __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
    name: "slide",
}));
var __VLS_9 = __VLS_8.apply(void 0, __spreadArray([{
        name: "slide",
    }], __VLS_functionalComponentArgsRest(__VLS_8), false));
(__VLS_ctx.transitionEvents);
var __VLS_12 = __VLS_10.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalDirective(___VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isActive) }), null, null);
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: "ws-collapse__content" }, { id: ("collapse-item-content-".concat(__VLS_ctx.name)) }));
/** @type {__VLS_StyleScopedClasses['ws-collapse__content']} */ ;
var __VLS_13 = {};
// @ts-ignore
[disabled, isActive, isActive, handleItemClick, name, name, title, transitionEvents,];
var __VLS_10;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_14 = __VLS_13;
// @ts-ignore
[];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeProps: {},
    props: {},
});
var __VLS_export = {};
exports.default = {};

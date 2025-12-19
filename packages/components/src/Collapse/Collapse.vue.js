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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
var vue_1 = require("vue");
var props = withDefaults(defineProps(), /// 引入属性
{
    accordion: false
});
var emits = defineEmits();
var ItemActivateList = (0, vue_1.ref)((_a = props.modelValue) !== null && _a !== void 0 ? _a : []); ////管理 已激活的item 名称
var handleItemClick = function (item) {
    // console.log(ItemActivateList.value);
    /// 手风琴模式
    if (props.accordion && ItemActivateList.value.length > 0) {
        if (ItemActivateList.value.indexOf(item) > -1) {
            ItemActivateList.value = [];
        }
        else {
            ItemActivateList.value = [];
            ItemActivateList.value.push(item);
        }
        emits('update:modelValue', ItemActivateList.value);
        emits('change:modelValue', ItemActivateList.value);
        return;
    }
    var index = ItemActivateList.value.indexOf(item);
    /// 默认模式
    if (index > -1) {
        // 如果该标签存在(已激活状态)
        ItemActivateList.value.splice(index, 1); // 开始位置， 个数
    }
    else {
        //如果该标签未激活
        ItemActivateList.value.push(item);
    }
    emits('update:modelValue', ItemActivateList.value);
    emits('change:modelValue', ItemActivateList.value);
};
/// 实现v-model 后续改变
(0, vue_1.watch)(function () { return props.modelValue; }, function () {
    var _a;
    ItemActivateList.value = (_a = props.modelValue) !== null && _a !== void 0 ? _a : [];
});
/// 创建透传加入 bus 🐕
(0, vue_1.provide)(type_1.CollapseProviderKey, ({
    handleItemClick: handleItemClick,
    ItemActivateList: ItemActivateList
}));
defineOptions({
    name: 'WsCollapse',
});
var __VLS_defaults = {
    accordion: false
};
var __VLS_ctx = __assign(__assign(__assign(__assign({}, {}), {}), {}), {});
var ___VLS_components;
var ___VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.div, __VLS_intrinsics.div)(__assign({ class: 'ws-collapse' }, { class: ({
        'is-accordion': __VLS_ctx.accordion
    }) }));
/** @type {__VLS_StyleScopedClasses['ws-collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['is-accordion']} */ ;
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[accordion,];
var __VLS_base = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
var __VLS_export = {};
exports.default = {};

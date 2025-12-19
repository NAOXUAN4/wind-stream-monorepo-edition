"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastMessageNodeBottomOffsetById = exports.getLastMessageNodeInstance = exports.createMessage = exports.messageNodeInstanceId = void 0;
var vue_1 = require("vue");
var Message_vue_1 = require("./Message.vue"); //// setup 默认自动导出
var messageNodeInstanceList = (0, vue_1.ref)([]);
exports.messageNodeInstanceId = (function () {
    var id = 0; // 私有变量
    return {
        get value() { return id; }, // 获取当前 id
        set value(v) { id = v; }, // 增加 id
    };
})();
var createMessage = function (props) {
    exports.messageNodeInstanceId.value += 1;
    var idx = "messageNode_".concat(exports.messageNodeInstanceId.value);
    var container = document.createElement('div');
    var destory = function () {
        (0, vue_1.render)(null, container);
        // 在列表中删除
        var idndl = messageNodeInstanceList.value.findIndex(function (el) {
            // console.log('des = ',el);
            return el.id == idx;
        });
        if (idndl == -1)
            return;
        // console.log(idndl);
        // console.log(messageNodeInstanceList.value[idndl]);
        messageNodeInstanceList.value.splice(idndl, 1);
    };
    var propsWithDestory = __assign(__assign({}, props), { onDestory: destory, messageId: idx });
    var vnode = (0, vue_1.h)(Message_vue_1.default, propsWithDestory); /// 以往使用 简单的结构 'div' ，遇到复杂的可以直接使用组建的 Constructor
    var instance = {
        id: idx,
        vnode: vnode,
        props: propsWithDestory,
    };
    messageNodeInstanceList.value.push(instance); /// 响应式数据的调动会通知所有被收集的副作用函数， 比如说TopOffset，于是分发订阅Topoffset更新
    (0, vue_1.render)(vnode, container); /// render api， (render func， 位置) => void
    document.body.appendChild(container.firstElementChild);
    return instance;
};
exports.createMessage = createMessage;
var getLastMessageNodeInstance = function () {
    // console.log(messageNodeInstanceList);
    return messageNodeInstanceList.value[messageNodeInstanceList.value.length - 1];
};
exports.getLastMessageNodeInstance = getLastMessageNodeInstance;
var getLastMessageNodeBottomOffsetById = function (id) {
    var _a, _b;
    var InstanceIndex = messageNodeInstanceList.value.findIndex(function (el) {
        return el.id === id;
    });
    if (InstanceIndex <= 0) {
        // console.log(InstanceIndex);
        return 0;
    }
    else {
        var lastInstance = messageNodeInstanceList.value[InstanceIndex - 1];
        // console.log(lastInstance, id, messageNodeInstanceList);
        return (_b = (_a = lastInstance === null || lastInstance === void 0 ? void 0 : lastInstance.vnode.component) === null || _a === void 0 ? void 0 : _a.exposed) === null || _b === void 0 ? void 0 : _b.bottomOffset.value;
    }
};
exports.getLastMessageNodeBottomOffsetById = getLastMessageNodeBottomOffsetById;

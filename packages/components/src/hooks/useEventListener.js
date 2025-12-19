"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useEventListener;
var vue_1 = require("vue");
function useEventListener(target, event, handler) {
    if ((0, vue_1.isRef)(target)) {
        (0, vue_1.watch)(target, function (val, oldVal) {
            oldVal === null || oldVal === void 0 ? void 0 : oldVal.removeEventListener(event, handler);
            val === null || val === void 0 ? void 0 : val.addEventListener(event, handler);
        });
    }
    else {
        (0, vue_1.onMounted)(function () {
            target.addEventListener(event, handler);
        });
        (0, vue_1.onBeforeUnmount)(function () {
            target.removeEventListener(event, handler);
        });
    }
}

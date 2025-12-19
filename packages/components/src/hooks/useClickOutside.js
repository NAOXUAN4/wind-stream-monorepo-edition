"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = useClickOutside;
var vue_1 = require("vue");
function useClickOutside(elementRef, callback) {
    var handler = function (e) {
        if (elementRef.value && e.target) { /// e：mouseEvent 触发位置不是 elementRef 的子元素， 触发callback()
            if (!elementRef.value.contains(e.target)) {
                callback(e);
                // console.log('handle');
            }
        }
    };
    (0, vue_1.onMounted)(function () {
        document.addEventListener('click', handler);
    });
    (0, vue_1.onUnmounted)(function () {
        document.removeEventListener('click', handler);
    });
}

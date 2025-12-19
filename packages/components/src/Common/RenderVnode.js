"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var RenderVnode = (0, vue_1.defineComponent)({
    props: {
        vNode: {
            type: [String, Object],
            require: true
        }
    },
    setup: function (props) {
        return function () { return props.vNode; };
    }
});
exports.default = RenderVnode;

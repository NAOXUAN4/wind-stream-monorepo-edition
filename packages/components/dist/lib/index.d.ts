import { default as WsButton } from './Button/Button.vue';
import { default as WsIcon } from './Icon/Icon.vue';
import { default as WsCollapse } from './Collapse/Collapse.vue';
import { default as WsCollapseItem } from './Collapse/CollapseItem.vue';
import { default as WsToast } from './Toast/Toast.vue';
import { default as WsToolTip } from './ToolTip/ToolTip.vue';
import { default as WsDropDown } from './DropDown/DropDown.vue';
import { default as WsMessage } from './Message/Message.vue';
import { createMessage } from './Message/method';
declare const _default: {
    install: (app: import('vue').App) => void;
    version: string;
};
export default _default;
export { WsButton, WsIcon, WsCollapse, WsCollapseItem, WsToast, WsToolTip, WsDropDown, WsMessage, createMessage };
export {};
declare module 'vue' {
    interface GlobalComponents {
        WsButton: typeof WsButton;
        WsIcon: typeof WsIcon;
        WsCollapse: typeof WsCollapse;
        WsCollapseItem: typeof WsCollapseItem;
        WsToast: typeof WsToast;
        WsMessage: typeof WsMessage;
        WsToolTip: typeof WsToolTip;
        WsDropDown: typeof WsDropDown;
    }
}

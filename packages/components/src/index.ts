


import { makeInstaller, withInstall } from './utils/make-installer';
import WsButton from './Button/Button.vue';
import WsIcon from './Icon/Icon.vue';
import WsCollapse from './Collapse/Collapse.vue';
import WsCollapseItem from './Collapse/CollapseItem.vue';
import WsToast from './Toast/Toast.vue';
import WsToolTip from './ToolTip/ToolTip.vue';
import WsDropDown from './DropDown/DropDown.vue';
import WsMessage from './Message/Message.vue';
import { createMessage } from './Message/method';


import './style/vars.scss';
import './style/index.scss';

const components = [
    withInstall(WsButton),
    withInstall(WsIcon),
    withInstall(WsCollapse),
    withInstall(WsCollapseItem),
    withInstall(WsToast),
    withInstall(WsToolTip),
    withInstall(WsDropDown),
    withInstall(WsMessage),
];

// 导出安装器 (Vue 插件模式)
export default makeInstaller(components);

// 按需导入时使用
export {
    WsButton,
    WsIcon,
    WsCollapse,
    WsCollapseItem,
    WsToast,
    WsToolTip,
    WsDropDown,
    WsMessage,
    createMessage
};


export {} 

declare module 'vue' {
    export interface GlobalComponents {
        //  key : template 里写的标签名
        // value : type类型
        WsButton: typeof WsButton
        WsIcon: typeof WsIcon
        WsCollapse: typeof WsCollapse
        WsCollapseItem: typeof WsCollapseItem
        WsToast: typeof WsToast
        WsMessage: typeof WsMessage
        WsToolTip: typeof WsToolTip
        WsDropDown: typeof WsDropDown
    }
}

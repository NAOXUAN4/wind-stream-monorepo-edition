
import { makeInstaller, withInstall } from './src/utils/make-installer';
import WsButton from './src/Button/Button.vue';
import WsIcon from './src/Icon/Icon.vue';
import WsCollapse from './src/Collapse/Collapse.vue';
import WsCollapseItem from './src/Collapse/CollapseItem.vue';

import WsToast from './src/Toast/Toast.vue';
import WsToolTip from './src/ToolTip/ToolTip.vue';
import WsDropDown from './src/DropDown/DropDown.vue';
import WsMessage from './src/Message/Message.vue';
import { createMessage } from './src/Message/method';



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

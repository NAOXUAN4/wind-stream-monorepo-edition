export {} 


declare module 'vue' {
    export interface GlobalComponents {
        //  key : template 里写的标签名
        // value : type类型
        WsButton: typeof import('../index')['WsButton']
        WsIcon: typeof import('../index')['WsIcon']
        WsCollapse: typeof import('../index')['WsCollapse']
        WsCollapseItem: typeof import('../index')['WsCollapseItem']
        WsToast: typeof import('../index')['WsToast']
        WsMessage: typeof import('../index')['WsMessage']
        WsToolTip: typeof import('../index')['WsToolTip']
        WsDropDown: typeof import('../index')['WsDropDown']
    }
}
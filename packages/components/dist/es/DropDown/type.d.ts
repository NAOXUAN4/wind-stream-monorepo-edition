import { VNode } from 'vue';
import { ToolTipProps } from '../ToolTip/type';
export type DropDownOptionsKey = string | number;
export interface MenuOptions {
    label: string | VNode;
    key: DropDownOptionsKey;
    disabled?: boolean;
    divided?: boolean;
}
export interface DropDownProps extends ToolTipProps {
    DropDownMenuOptions: MenuOptions[];
}
export interface DropDownEmits {
    (e: 'visiable-change', value: boolean): void;
    (e: 'update:select', value: DropDownOptionsKey): void;
}
export interface DropDownInstance {
    show: () => void;
    hide: () => void;
}

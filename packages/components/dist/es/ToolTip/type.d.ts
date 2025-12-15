import { Placement, Options } from '@popperjs/core';
export type ToolTipTriggerType = "hover" | "click" | "manaul";
export interface ToolTipProps {
    trigger?: ToolTipTriggerType;
    content?: string;
    placement?: Placement;
    modelValue?: boolean;
    popperOptions?: Partial<Options>;
    transition?: string;
    changeDelay?: number;
    minWidth?: number;
    maxWidth?: number;
    autoWidth?: boolean;
}
export interface ToolTipEmits {
    (e: 'update:modelValue', v: boolean): void;
    (e: 'change:modelValue', v: boolean): void;
}
export interface ToolTipInstance {
    show: () => void;
    hide: () => void;
}

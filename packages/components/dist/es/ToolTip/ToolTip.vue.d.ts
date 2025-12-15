import { ToolTipProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        tooltiprootNode: HTMLDivElement;
        triggerNode: HTMLDivElement;
        poperNode: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ToolTipProps, {
    show: () => void;
    hide: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (v: boolean) => any;
    "change:modelValue": (v: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ToolTipProps> & Readonly<{
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    "onChange:modelValue"?: ((v: boolean) => any) | undefined;
}>, {
    transition: string;
    trigger: import('./type').ToolTipTriggerType;
    placement: import('@popperjs/core').Placement;
    changeDelay: number;
    minWidth: number;
    maxWidth: number;
    autoWidth: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    tooltiprootNode: HTMLDivElement;
    triggerNode: HTMLDivElement;
    poperNode: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

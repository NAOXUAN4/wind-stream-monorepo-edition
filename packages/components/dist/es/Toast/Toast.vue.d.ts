import { ToastProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ToastProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (v: boolean) => any;
    "change:modelValue": (v: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ToastProps> & Readonly<{
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    "onChange:modelValue"?: ((v: boolean) => any) | undefined;
}>, {
    closable: boolean;
    disapper: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

import { CollapseItemNameType, CollapseProps } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CollapseProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: CollapseItemNameType[]) => any;
    "change:modelValue": (value: CollapseItemNameType[]) => any;
}, string, import('vue').PublicProps, Readonly<CollapseProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: CollapseItemNameType[]) => any) | undefined;
    "onChange:modelValue"?: ((value: CollapseItemNameType[]) => any) | undefined;
}>, {
    accordion: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

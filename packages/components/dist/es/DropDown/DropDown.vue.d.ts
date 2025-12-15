import { DropDownProps, DropDownOptionsKey } from './type';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        DpToolTipRef: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: {
                readonly trigger?: import('../ToolTip/type').ToolTipTriggerType | undefined;
                readonly content?: string | undefined;
                readonly placement?: import('@popperjs/core').Placement | undefined;
                readonly modelValue?: boolean | undefined;
                readonly popperOptions?: Partial<import('@popperjs/core').Options> | undefined;
                readonly transition?: string | undefined;
                readonly changeDelay?: number | undefined;
                readonly minWidth?: number | undefined;
                readonly maxWidth?: number | undefined;
                readonly autoWidth?: boolean | undefined;
                readonly "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
                readonly "onChange:modelValue"?: ((v: boolean) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            } & {
                tooltiprootNode: HTMLDivElement;
                triggerNode: HTMLDivElement;
                poperNode: HTMLDivElement;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: ((event: "update:modelValue", v: boolean) => void) & ((event: "change:modelValue", v: boolean) => void);
            $el: HTMLDivElement;
            $options: import('vue').ComponentOptionsBase<Readonly<import('../ToolTip/type').ToolTipProps> & Readonly<{
                "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
                "onChange:modelValue"?: ((v: boolean) => any) | undefined;
            }>, {
                show: () => void;
                hide: () => void;
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
                "update:modelValue": (v: boolean) => any;
                "change:modelValue": (v: boolean) => any;
            }, string, {
                transition: string;
                trigger: import('../ToolTip/type').ToolTipTriggerType;
                placement: import('@popperjs/core').Placement;
                changeDelay: number;
                minWidth: number;
                maxWidth: number;
                autoWidth: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            transition: string;
            trigger: import('../ToolTip/type').ToolTipTriggerType;
            placement: import('@popperjs/core').Placement;
            changeDelay: number;
            minWidth: number;
            maxWidth: number;
            autoWidth: boolean;
        }> & Omit<Readonly<import('../ToolTip/type').ToolTipProps> & Readonly<{
            "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
            "onChange:modelValue"?: ((v: boolean) => any) | undefined;
        }>, "show" | "hide" | ("transition" | "trigger" | "placement" | "changeDelay" | "minWidth" | "maxWidth" | "autoWidth")> & import('vue').ShallowUnwrapRef<{
            show: () => void;
            hide: () => void;
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
                content?(_: {}): any;
            };
        }) | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DropDownProps, {
    show: () => void;
    hide: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "visiable-change": (value: boolean) => any;
    "update:select": (value: DropDownOptionsKey) => any;
}, string, import('vue').PublicProps, Readonly<DropDownProps> & Readonly<{
    "onVisiable-change"?: ((value: boolean) => any) | undefined;
    "onUpdate:select"?: ((value: DropDownOptionsKey) => any) | undefined;
}>, {
    placement: import('@popperjs/core').Placement;
    changeDelay: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    DpToolTipRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly trigger?: import('../ToolTip/type').ToolTipTriggerType | undefined;
            readonly content?: string | undefined;
            readonly placement?: import('@popperjs/core').Placement | undefined;
            readonly modelValue?: boolean | undefined;
            readonly popperOptions?: Partial<import('@popperjs/core').Options> | undefined;
            readonly transition?: string | undefined;
            readonly changeDelay?: number | undefined;
            readonly minWidth?: number | undefined;
            readonly maxWidth?: number | undefined;
            readonly autoWidth?: boolean | undefined;
            readonly "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
            readonly "onChange:modelValue"?: ((v: boolean) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            tooltiprootNode: HTMLDivElement;
            triggerNode: HTMLDivElement;
            poperNode: HTMLDivElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "update:modelValue", v: boolean) => void) & ((event: "change:modelValue", v: boolean) => void);
        $el: HTMLDivElement;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../ToolTip/type').ToolTipProps> & Readonly<{
            "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
            "onChange:modelValue"?: ((v: boolean) => any) | undefined;
        }>, {
            show: () => void;
            hide: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (v: boolean) => any;
            "change:modelValue": (v: boolean) => any;
        }, string, {
            transition: string;
            trigger: import('../ToolTip/type').ToolTipTriggerType;
            placement: import('@popperjs/core').Placement;
            changeDelay: number;
            minWidth: number;
            maxWidth: number;
            autoWidth: boolean;
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
        transition: string;
        trigger: import('../ToolTip/type').ToolTipTriggerType;
        placement: import('@popperjs/core').Placement;
        changeDelay: number;
        minWidth: number;
        maxWidth: number;
        autoWidth: boolean;
    }> & Omit<Readonly<import('../ToolTip/type').ToolTipProps> & Readonly<{
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
        "onChange:modelValue"?: ((v: boolean) => any) | undefined;
    }>, "show" | "hide" | ("transition" | "trigger" | "placement" | "changeDelay" | "minWidth" | "maxWidth" | "autoWidth")> & import('vue').ShallowUnwrapRef<{
        show: () => void;
        hide: () => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {}): any;
            content?(_: {}): any;
        };
    }) | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

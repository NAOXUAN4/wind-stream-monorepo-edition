import { Ref, InjectionKey } from 'vue';
export type CollapseItemNameType = string | null;
export interface CollapseItemProps {
    name: CollapseItemNameType;
    title?: string;
    disabled?: boolean;
}
export interface CollapseProps {
    modelValue?: CollapseItemNameType[];
    accordion?: boolean;
}
export interface CollapseEmits {
    (e: 'update:modelValue', value: CollapseItemNameType[]): void;
    (e: 'change:modelValue', value: CollapseItemNameType[]): void;
}
export interface CollapseProviderType {
    ItemActivateList: Ref<CollapseItemNameType[]>;
    handleItemClick: (item: CollapseItemNameType) => void;
}
export declare const CollapseProviderKey: InjectionKey<CollapseProviderType>;

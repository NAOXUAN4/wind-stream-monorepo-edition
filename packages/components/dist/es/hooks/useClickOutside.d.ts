import { Ref } from 'vue';
export default function useClickOutside(elementRef: Ref<undefined | HTMLElement>, callback: (e: MouseEvent) => void): void;

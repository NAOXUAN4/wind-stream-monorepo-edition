/**
 * 按需加载图标
 * @param icon 图标名称或对象，如 'fa-solid fa-xmark' 或 { prefix: 'fas', iconName: 'home' }
 */
export declare const loadIcon: (icon: string | {
    prefix: string;
    iconName: string;
}) => void;
/**
 * 预加载常用图标
 */
export declare const preloadCommonIcons: () => void;

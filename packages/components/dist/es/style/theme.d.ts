export interface ThemeColors {
    primary: string;
    warning: string;
    error: string;
    info: string;
    success: string;
    loading: string;
}
export interface Theme {
    name: string;
    colors: ThemeColors;
}
export declare const defaultTheme: Theme;
export declare const darkTheme: Theme;
declare class ThemeManager {
    private currentTheme;
    private themes;
    constructor();
    /**
     * 注册主题
     * @param theme 主题配置
     */
    registerTheme(theme: Theme): void;
    /**
     * 切换主题
     * @param themeName 主题名称
     */
    useTheme(themeName: string): void;
    /**
     * 应用主题到DOM
     * @param theme 主题配置
     */
    private applyTheme;
    /**
     * 更新颜色调色板
     * @param root 根元素
     * @param colorName 颜色名称
     * @param baseColor 基础颜色
     */
    private updateColorPalette;
    /**
     * 获取当前主题
     */
    getCurrentTheme(): Theme;
    /**
     * 获取所有注册的主题
     */
    getAllThemes(): Theme[];
    /**
     * 自定义主题颜色
     * @param colors 颜色配置
     */
    setThemeColors(colors: Partial<ThemeColors>): void;
}
export declare const themeManager: ThemeManager;
export declare const useTheme: (themeName: string) => void;
export declare const registerTheme: (theme: Theme) => void;
export declare const getCurrentTheme: () => Theme;
export declare const getAllThemes: () => Theme[];
export declare const setThemeColors: (colors: Partial<ThemeColors>) => void;
export {};

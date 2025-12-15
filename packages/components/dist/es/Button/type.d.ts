export type ButtonType = 'primary' | 'success' | 'warning' | 'error' | 'info';
export type ButtonSize = 'small' | 'large';
export type ButtonNativeType = 'button' | 'submit' | 'reset';
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    disabled?: boolean;
    round?: boolean;
    circle?: boolean;
    icon?: string;
    nativetype?: ButtonNativeType;
    autofocus?: boolean;
}
export interface ButtonInstance {
    ref: HTMLButtonElement;
}

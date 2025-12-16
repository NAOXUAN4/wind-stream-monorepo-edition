import { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';
export type IconType = 'primary' | 'success' | 'warning' | 'error' | 'info';
export interface IconProps extends FontAwesomeIconProps {
    color?: string;
    type?: IconType;
}

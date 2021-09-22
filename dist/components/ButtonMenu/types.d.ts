import { ButtonProps, Sizes, variants } from "../Button/types";
export declare type ButtonMenuItemProps = {
    isActive?: boolean;
    size?: Sizes;
} & ButtonProps;
export interface ButtonMenuProps {
    variant?: typeof variants.PRIMARY | typeof variants.SUBTLE | typeof variants.SECONDARY;
    activeIndex?: number;
    onClick?: (index: number) => void;
    size?: Sizes;
    children: React.ReactElement[];
}

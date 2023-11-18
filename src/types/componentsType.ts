import { ButtonHTMLAttributes, HTMLAttributes, HTMLProps } from "react";
import { SelectProps } from "@mui/material";

export interface SelectInputProps extends SelectProps {
    label?: string;
    message?: string;
    status?: string;
    inputSize?: string;
    options?: any[];
    keys?: any;
    placeholder?: string;
    startIcon?: any;
    disabledPlaceholder?: boolean;
    backgroundColor?: string;
    iconIsWhite?: boolean;
    hideIcon?: boolean;
    width?: string;
    marginElement?: string;
    inputTextColor?: string;
    validation?: any;
    isInvalid?: any;
    customMenuProps?: any;
}
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: any;
    buttonRef?: any
    padding?: string;
    margin?: string;

}
export interface IMainButton extends IButton {
    model?: "filled" | "outline" | "simple";
    size?: "XS" | "SM" | "M";
}


export interface IContainer extends HTMLAttributes<HTMLDivElement> {
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    margin?: string;
    padding?: string;
    name?: string;
    containerRef?: any;

}
export interface IRow extends IContainer { gap?: string }

export interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
    type?: keyof JSX.IntrinsicElements;
}
export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
    display?: string;
    fontSize?: string;
    color?: string;
    padding?: string;
    margin?: string;
}

export interface IText extends HTMLAttributes<HTMLSpanElement> {
    display?: string;
    fontSize?: string;
    color?: string;
    padding?: string;
    margin?: string;
    lineHeight?: string;
    fontWeight?: string;
}

export interface IIcon extends HTMLAttributes<HTMLElement> {
    margin?: string;
    padding?: string;
}
export interface IForm extends HTMLAttributes<HTMLFormElement> { }

// ok
export interface IInput extends HTMLProps<HTMLInputElement> {
    type?: string;
    icon?: any;
    margin?: string;
    padding?: string;
    label?: string;
    message?: string;
    width?: string;
    iconRight?: boolean;
    status?: 'error' | 'warning' | 'success' | '';
    validation?: any;
}
export interface ITextarea extends HTMLProps<HTMLTextAreaElement> {
    margin?: string;
    padding?: string;
    label?: string;
    message?: string;
    width?: string;
    status?: 'error' | 'warning' | 'success' | '';
    validation?: any,
    textAreaClassName?: string,
    height?: string


}
export interface IDownloadLink extends HTMLProps<HTMLAnchorElement> {


}
import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './AppButton.module.scss';

export enum AppButtonTheme {
    CLEAR = 'clear',
    INVERTED_CLEAR = 'inverted-clear',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'inverted-background',
}

export enum AppButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    square?: boolean;
    size?: AppButtonSize;
    disabled?: boolean;
}

export const AppButton = memo((props: AppButtonProps) => {
    const {
        children,
        className,
        theme,
        square,
        disabled,
        size = AppButtonSize.M,
        ...otherProps
    } = props;

    const mode: Record<string, boolean> = {
        [cln.square]: square,
        [cln.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cln.AppButton, mode, [className, cln[theme], cln[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});

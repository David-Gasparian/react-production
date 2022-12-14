import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cln from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextALign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
    align?: TextALign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextALign.LEFT,
    } = props;

    return (
        <div
            data-testid='textWrapper'
            className={classNames(cln.Text, {}, [className, cln[theme], cln[align]])}
        >
            {title && (
                <p
                    data-testid='title'
                    className={cln.title}
                >
                    {title}
                </p>
            )}

            {text && (
                <p
                    data-testid='text'
                    className={cln.text}
                >
                    {text}
                </p>
            )}

        </div>
    );
});

import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
    secondary?: boolean;
}

export const Icon = memo((props: IIconProps) => {
    const { className, Svg, inverted = false, secondary = false, ...otherProps } = props;
    return (
        <Svg
            className={classNames(
                cls.icon,
                {
                    [cls.inverted]: inverted,
                    [cls.secondary]: secondary,
                },
                [className],
            )}
            {...otherProps}
        />
    );
});

import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IIconProps) => {
    const { className, Svg, inverted = false } = props;
    return (
        <div className={classNames(cls.icon, { [cls.inverted]: inverted }, [className])}>
            <Svg />
        </div>
    );
});

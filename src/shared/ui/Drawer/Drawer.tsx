import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface IDrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: IDrawerProps) => {
    const { className, children, isOpen, onClose } = props;
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
});

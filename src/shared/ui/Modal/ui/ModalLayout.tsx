import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import animationStyles from './animationStyles.module.scss';
import cls from './ModalLayout.module.scss';
import { ANIMATION_TIME } from '../config/ModalConfig';

interface IModalLayoutProps {
    children: ReactNode;
    opened: boolean;
    onClose: () => void;
    className: string | undefined;
}

const overlayAnimation: CSSTransitionClassNames = {
    enter: animationStyles.overlayEnter,
    enterActive: animationStyles.overlayEnterActive,
    exit: animationStyles.overlayExit,
    exitActive: animationStyles.contentExitActive,
};

const contentAnimation: CSSTransitionClassNames = {
    enter: animationStyles.contentEnter,
    enterActive: animationStyles.contentEnterActive,
    exit: animationStyles.contentExit,
    exitActive: animationStyles.contentExitActive,
};

export const ModalLayout = (props: IModalLayoutProps) => {
    const { onClose, children, opened, className } = props;

    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { theme } = useTheme();

    const [animationIn, setAnimationIn] = useState(false);

    useEffect(() => {
        setAnimationIn(opened);
    }, [opened]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        if (opened) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [opened, onKeyDown]);

    return (
        <div className={classNames(cls.container, {}, [className, theme, 'app_modal'])}>
            <CSSTransition
                in={animationIn}
                nodeRef={overlayRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={overlayAnimation}
            >
                <div
                    ref={overlayRef}
                    className={cls.overlay}
                    onClick={onClose}
                />
            </CSSTransition>
            <CSSTransition
                in={animationIn}
                nodeRef={contentRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={contentAnimation}
            >
                <div
                    ref={contentRef}
                    className={cls.content}
                >
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};

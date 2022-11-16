import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRestoreScrollByPath, restoreScrollActions } from 'features/restoreScroll';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { IStateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: IPageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: IStateSchema) =>
        getRestoreScrollByPath(state, location.pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            restoreScrollActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: location.pathname,
            }),
        );
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScrollHandler}
        >
            {children}
            {onScrollEnd ? (
                <div
                    className={cls.trigger}
                    ref={triggerRef}
                />
            ) : null}
        </section>
    );
};

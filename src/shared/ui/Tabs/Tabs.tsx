import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface ITabItem {
    value: string;
    content: ReactNode;
}

interface ITabsProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem) => void;
}

export const Tabs = memo((props: ITabsProps) => {
    const { className, tabs, onTabClick, value } = props;

    const onClickHandler = useCallback(
        (tab: ITabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={onClickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});

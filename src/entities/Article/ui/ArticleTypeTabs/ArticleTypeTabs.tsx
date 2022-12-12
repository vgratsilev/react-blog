// TODO refactor this as single feature
// with isolated state, slice, etc
// after refactor whole page

import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ITabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/articleConsts';

interface IArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: IArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article');

    const tabs = useMemo<ITabItem[]>(
        () => [
            { value: ArticleType.ALL, content: t('AllTabItemText') },
            { value: ArticleType.IT, content: t('ITTabItemText') },
            { value: ArticleType.JS, content: t('JSTabItemText') },
            { value: ArticleType.FOOD, content: t('FoodTabItemText') },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: ITabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={tabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});

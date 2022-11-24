import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ISelectOption, Select } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface IArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: IArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('article');

    const sortFieldOptions = useMemo<ISelectOption<ArticleSortField>[]>(
        () => [
            { value: ArticleSortField.CREATED, content: t('SortFieldCreated') },
            { value: ArticleSortField.VIEWS, content: t('SortFieldViews') },
            { value: ArticleSortField.TITLE, content: t('SortFieldTitle') },
        ],
        [t],
    );

    const orderOptions = useMemo<ISelectOption<SortOrder>[]>(
        () => [
            { value: 'asc', content: t('SortDirectionAsc') },
            { value: 'desc', content: t('SortDirectionDesc') },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                className={cls.sortBy}
                label={t('SortByLabel')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
                labelNoWidth
            />
            <Select<SortOrder>
                className={cls.order}
                label={t('SortDirectionLabel')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                labelNoWidth
            />
        </div>
    );
});

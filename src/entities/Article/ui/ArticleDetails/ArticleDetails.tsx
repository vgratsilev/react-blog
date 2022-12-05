import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/ArticleDetails/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

interface IArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: IArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            default:
                return null;
        }
    }, []);

    let content;
    if (isLoading) {
        content = (
            <VStack
                gap={'16'}
                maxWidth
            >
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius={'50%'}
                />
                <Skeleton
                    width={300}
                    height={32}
                />
                <Skeleton
                    width={600}
                    height={24}
                />
                <Skeleton
                    width={'100%'}
                    height={200}
                />
                <Skeleton
                    width={'100%'}
                    height={200}
                />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                title={t('ArticleDetailsLoadingError')}
                TitleTag={'h1'}
            />
        );
    } else {
        content = (
            <>
                <HStack
                    maxWidth
                    justify={'center'}
                >
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack
                    gap={'4'}
                    maxWidth
                >
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                        TitleTag={'h2'}
                    />
                    <HStack gap={'8'}>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap={'8'}>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.created_dt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap={'16'}
                maxWidth
                className={classNames(cls.articleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});

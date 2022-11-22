import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss';
import {
    ArticleBlockType,
    ArticleView,
    IArticle,
    IArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('article');

    const types = (
        <Text
            text={article.type.join(', ')}
            className={cls.types}
        />
    );

    const views = (
        <>
            <Text
                text={String(article.views)}
                className={cls.views}
            />
            <Icon
                Svg={EyeIcon}
                className={cls.viewIcon}
            />
        </>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as IArticleTextBlock;

        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar
                            size={30}
                            src={article.user.avatar}
                        />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text
                            text={article.created_dt}
                            className={cls.date}
                        />
                    </div>
                    <Text
                        title={article.title}
                        className={cls.title}
                    />
                    {types}
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>{t('ContinueReadingBtn')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.articleTileAppLink, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text
                        text={article.created_dt}
                        className={cls.date}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text
                    text={article.title}
                    className={cls.title}
                />
            </Card>
        </AppLink>
    );
});

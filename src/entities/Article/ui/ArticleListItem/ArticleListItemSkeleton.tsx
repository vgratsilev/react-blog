import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';

interface IArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius={'50%'}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.username}
                        />
                        <Skeleton
                            width={150}
                            height={16}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton
                        width={250}
                        height={24}
                        className={cls.title}
                    />
                    <Skeleton
                        height={200}
                        className={cls.img}
                    />

                    <Skeleton
                        height={150}
                        className={cls.textBlock}
                    />

                    <div className={cls.footer}>
                        <Skeleton
                            width={200}
                            height={36}
                        />

                        <Skeleton
                            width={50}
                            height={36}
                            className={cls.views}
                        />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton
                        width={200}
                        height={200}
                        className={cls.img}
                    />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton
                        width={130}
                        height={16}
                        className={cls.types}
                    />
                </div>
                <Skeleton
                    width={150}
                    height={16}
                    className={cls.title}
                />
            </Card>
        </div>
    );
});

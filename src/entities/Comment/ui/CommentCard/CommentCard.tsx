import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import { IComment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment?: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: ICommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        borderRadius={'50%'}
                    />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    width={'100%'}
                    height={50}
                    className={cls.text}
                />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            maxWidth
            gap={'8'}
            className={classNames(cls.commentCard, {}, [className])}
        >
            <AppLink
                to={`${RoutePath.profile}${comment.user.id}`}
                className={cls.header}
            >
                <Avatar
                    size={30}
                    src={comment.user.avatar}
                />
                <Text
                    className={cls.username}
                    text={comment.user.username}
                />
            </AppLink>
            <Text
                className={cls.text}
                text={comment.text}
            />
        </VStack>
    );
});

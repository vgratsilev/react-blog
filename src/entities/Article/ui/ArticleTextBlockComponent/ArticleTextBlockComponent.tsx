import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { IArticleTextBlock } from '../../model/types/article';

interface IArticleTextBlockComponentProps {
    className?: string;
    block: IArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: IArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {block.title && (
                <Text
                    title={block.title}
                    className={cls.title}
                    TitleTag={'h2'}
                />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    );
});

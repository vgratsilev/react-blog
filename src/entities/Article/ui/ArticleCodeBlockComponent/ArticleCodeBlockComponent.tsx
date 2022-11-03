import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { IArticleCodeBlock } from '../../model/types/article';

interface IArticleCodeBlockComponentProps {
    className?: string;
    block: IArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: IArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});

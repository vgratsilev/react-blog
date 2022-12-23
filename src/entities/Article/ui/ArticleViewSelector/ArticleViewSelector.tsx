import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import TileViewIcon from '@/shared/assets/icons/tileView.svg';
import ListViewIcon from '@/shared/assets/icons/listView.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleViewSelector.module.scss';

interface IArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.TILE,
        icon: TileViewIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListViewIcon,
    },
];

export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.selected]: viewType.view === view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});

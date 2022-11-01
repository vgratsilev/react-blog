import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface IArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = (props: IArticleImageBlockComponentProps) => {
    const { className } = props;
    // const { t } = useTranslation();
    return <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])} />;
};

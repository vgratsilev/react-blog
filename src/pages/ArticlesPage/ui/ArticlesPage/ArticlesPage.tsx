import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList, ArticleView, IArticle } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface IArticlePageProps {
    className?: string;
}

const article = {
    id: '1',
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    img: 'https://cdn2.hexlet.io/store/derivatives/4aa834c7741fe4045ae3e5ecf6179654/fill_webp-850-400.webp',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
    },
    views: 420,
    created_dt: '31.10.2022',
    type: ['IT', 'JS'],
    blocks: [
        {
            id: '1',
            type: 'text',
            title: 'block title',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibus nisi nobis nulla, numquam, porro quam tenetur veritatis vero voluptatum. Commodi distinctio dolor eligendi esse facere ipsum labore laborum libero minima omnis placeat quam recusandae, repellat sed sit voluptas!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibusero voluptatum. Commodi distinctio dolor eligendi esse facere ipsum labore laborum libero minima omnis placeat quam recusandae, repellat sed sit voluptas!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibus nisi nobis nulla, numquam, porro quam tenetur veritatis vero voluptatum. Commodi distinctio ',
            ],
        },
        {
            id: '2',
            type: 'code',
            code: 'put some code here',
        },
        {
            id: '3',
            type: 'image',
            src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZDtqrBOj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/js_thanks.png%3Fraw%3Dtrue',
            alt: 'js image',
            title: 'Just JS',
        },
    ],
} as IArticle;

const ArticlesPage = (props: IArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            {t('ArticlesPage')}
            <ArticleList
                articles={new Array(9).fill(0).map((item, index) => ({
                    ...article,
                    id: String(index),
                }))}
                view={ArticleView.TILE}
                isLoading={false}
            />
        </div>
    );
};

export default memo(ArticlesPage);

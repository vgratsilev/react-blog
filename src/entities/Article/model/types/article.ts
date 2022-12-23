import { IUser } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../consts/articleConsts';

export interface IArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
    alt: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type TArticleBlock = IArticleTextBlock | IArticleImageBlock | IArticleCodeBlock;

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    user: IUser;
    views: number;
    created_dt: string;
    type: ArticleType[];
    blocks: TArticleBlock[];
}

export enum ArticleType {
    IT = 'IT',
    JS = 'JS',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockType {
    CODE = 'code',
    IMAGE = 'image',
    TEXT = 'text',
}

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

export type ArticleBlock = IArticleTextBlock | IArticleImageBlock | IArticleCodeBlock;

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    created_dt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

// <Page route, scroll position>
export type ScrollSchema = Record<string, number>;

export interface IRestoreScrollSchema {
    scroll: ScrollSchema;
}

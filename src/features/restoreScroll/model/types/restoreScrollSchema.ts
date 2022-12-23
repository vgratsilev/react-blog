// <Page route, scroll position>
export type TScrollSchema = Record<string, number>;

export interface IRestoreScrollSchema {
    scroll: TScrollSchema;
}

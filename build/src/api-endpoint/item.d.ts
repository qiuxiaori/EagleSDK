import { ResponseBody } from '../../index';
import { Base } from './base';
import { FolderId } from './folder';
type Timestamp = number;
type BaseItem = {
    name: string;
    website?: string;
    tags?: string[];
    annotation?: string;
    modificationTime?: Timestamp;
};
type AddFromURLParameters = {
    url: string;
} & BaseItem & Partial<FolderId>;
type AddFromURLsParameters = {
    items: AddFromURLParameters[];
} & Partial<FolderId>;
type AddFromPathParameters = {
    path: string;
} & BaseItem & Partial<FolderId>;
type AddFromPathsParameters = {
    items: AddFromPathParameters[];
} & Partial<FolderId>;
type AddBookmarkParameters = BaseItem & {
    url: string;
    base64?: string;
};
type ListParameters = {
    limit?: number;
    offset?: number;
    orderBy?: 'CREATEDATE' | 'FILESIZE' | 'NAME' | 'RESOLUTION' | '-CREATEDATE' | '-FILESIZE' | '-NAME' | '-RESOLUTION';
    keyword?: string;
    ext?: string;
    tags?: string[];
    folders?: string[];
};
type UpdateParameters = {
    id: string;
    url?: string;
    tags?: string[];
    annotation?: string;
    star?: 1 | 2 | 3 | 4 | 5;
};
export declare class Item extends Base {
    /**
     * 从链接添加文件
     */
    addFromURL(data: AddFromURLParameters): Promise<ResponseBody>;
    /**
     * 从多个链接添加文件
     */
    addFromURLs(data: AddFromURLsParameters): Promise<ResponseBody>;
    /**
     * 添加本地文件
     */
    addFromPath(data: AddFromPathParameters): Promise<ResponseBody>;
    /**
     * 添加多个本地文件
     */
    addFromPaths(data: AddFromPathsParameters): Promise<ResponseBody>;
    /**
     * 添加书签
     */
    addBookmark(data: AddBookmarkParameters): Promise<ResponseBody>;
    /**
     * 详情
     */
    info(id: string): Promise<ResponseBody>;
    /**
     * 移到回收站
     */
    moveToTrash(itemIds: string[]): Promise<ResponseBody>;
    /**
     * 获取缩略图
     */
    thumbnail(id: string): Promise<ResponseBody>;
    /**
     * 刷新缩略图
     */
    refreshThumbnail(id: string): Promise<ResponseBody>;
    /**
     * 项目列表
     */
    list(data: ListParameters): Promise<ResponseBody>;
    /**
     * 重新分析颜色
     */
    refreshPalette(id: string): Promise<ResponseBody>;
    /**
     * 修改项目信息
     */
    update(data: UpdateParameters): Promise<ResponseBody>;
}
export {};
//# sourceMappingURL=item.d.ts.map
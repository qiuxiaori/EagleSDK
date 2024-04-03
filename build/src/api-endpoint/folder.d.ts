import { ResponseBody } from '../index';
import { Base } from './base';
export type FolderName = {
    folderName: string;
};
export type Parent = {
    parent: string;
};
export type FolderId = {
    folderId: string;
};
export type NewName = {
    newName: string;
};
export type UpdateParameters = FolderId & Partial<NewName> & {
    newDescription?: string;
    newColor?: string;
};
export declare class Folder extends Base {
    /**
     * 创建（子）文件夹
     */
    create(data: FolderName & Partial<Parent>): Promise<ResponseBody>;
    /**
     * 重命名
     */
    rename(data: FolderId & NewName): Promise<ResponseBody>;
    /**
     * 更新
     */
    update(data: UpdateParameters): Promise<ResponseBody>;
    /**
     * 列表
     */
    list(): Promise<ResponseBody>;
    /**
     * 最近使用列表
     */
    listRecent(): Promise<ResponseBody>;
}
//# sourceMappingURL=folder.d.ts.map
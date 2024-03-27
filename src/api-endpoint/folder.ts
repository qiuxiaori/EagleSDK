import { ResponseBody } from '../../index'
import { Base } from './base'

export type FolderName = { folderName: string }
export type Parent = { parent: string }
export type FolderId = { folderId: string }
export type NewName = { newName: string }
export type UpdateParameters = FolderId &
    Partial<NewName> & {
        newDescription?: string
        newColor?: string
    }
export class Folder extends Base {
    /**
     * 创建（子）文件夹
     */
    async create(data: FolderName & Partial<Parent>): Promise<ResponseBody> {
        return this.request({
            url: `/folder/create`,
            method: 'post',
            data,
        })
    }
    /**
     * 重命名
     */
    async rename(data: FolderId & NewName): Promise<ResponseBody> {
        return this.request({
            url: `/folder/rename`,
            method: 'post',
            data,
        })
    }
    /**
     * 更新
     */
    async update(data: UpdateParameters): Promise<ResponseBody> {
        return this.request({
            url: `/folder/update`,
            method: 'post',
            data,
        })
    }
    /**
     * 列表
     */
    async list(): Promise<ResponseBody> {
        return this.request({
            url: `/folder/list`,
        })
    }
    /**
     * 最近使用列表
     */
    async listRecent(): Promise<ResponseBody> {
        return this.request({
            url: `/folder/listRecent`,
        })
    }
}

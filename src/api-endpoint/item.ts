import { ResponseBody } from '../../index'
import { Base } from './base'
import { FolderId } from './folder'

type Timestamp = number

type BaseItem = {
    name: string
    website?: string
    tags?: string[]
    annotation?: string
    modificationTime?: Timestamp
}
type AddFromURLParameters = { url: string } & BaseItem & Partial<FolderId>
type AddFromURLsParameters = {
    items: AddFromURLParameters[]
} & Partial<FolderId>
type AddFromPathParameters = { path: string } & BaseItem & Partial<FolderId>
type AddFromPathsParameters = {
    items: AddFromPathParameters[]
} & Partial<FolderId>
type AddBookmarkParameters = BaseItem & {
    url: string
    base64?: string
}
type ListParameters = {
    limit?: number
    offset?: number
    orderBy?: 'CREATEDATE' | 'FILESIZE' | 'NAME' | 'RESOLUTION' | '-CREATEDATE' | '-FILESIZE' | '-NAME' | '-RESOLUTION'
    keyword?: string
    ext?: string
    tags?: string[]
    folders?: string[]
}
type UpdateParameters = {
    id: string
    url?: string
    tags?: string[]
    annotation?: string
    star?: 1 | 2 | 3 | 4 | 5
}

export class Item extends Base {
    /**
     * 从链接添加文件
     */
    async addFromURL(data: AddFromURLParameters): Promise<ResponseBody> {
        return this.request({
            url: `/item/addFromURL`,
            method: 'post',
            data,
        })
    }
    /**
     * 从多个链接添加文件
     */
    async addFromURLs(data: AddFromURLsParameters): Promise<ResponseBody> {
        return this.request({
            url: `/item/addFromURLs`,
            method: 'post',
            data,
        })
    }
    /**
     * 添加本地文件
     */
    async addFromPath(data: AddFromPathParameters): Promise<ResponseBody> {
        return this.request({
            url: `/item/addFromPath`,
            method: 'post',
            data,
        })
    }
    /**
     * 添加多个本地文件
     */
    async addFromPaths(data: AddFromPathsParameters): Promise<ResponseBody> {
        return this.request({
            url: `/item/addFromPaths`,
            method: 'post',
            data,
        })
    }
    /**
     * 添加书签
     */
    async addBookmark(data: AddBookmarkParameters): Promise<ResponseBody> {
        return this.request({
            url: `/item/addBookmark`,
            method: 'post',
            data,
        })
    }
    /**
     * 详情
     */
    async info(id: string): Promise<ResponseBody> {
        return this.request({
            url: `/item/info?token=${this.opts.token}&id=${id}`,
        })
    }
    /**
     * 移到回收站
     */
    async moveToTrash(itemIds: string[]): Promise<ResponseBody> {
        return this.request({
            url: `/item/moveToTrash`,
            method: 'post',
            data: { itemIds },
        })
    }
    /**
     * 获取缩略图
     */
    async thumbnail(id: string): Promise<ResponseBody> {
        return this.request({
            url: `/item/thumbnail?token=${this.opts.token}&id=${id}`,
        })
    }
    /**
     * 刷新缩略图
     */
    async refreshThumbnail(id: string): Promise<ResponseBody> {
        return this.request({
            url: `/item/refreshThumbnail`,
            method: 'post',
            data: { id },
        })
    }
    /**
     * 项目列表
     */
    async list(data: ListParameters): Promise<ResponseBody> {
        return this.request({
            url: `/item/list`,
            method: 'post',
            data,
        })
    }
    /**
     * 重新分析颜色
     */
    async refreshPalette(id: string): Promise<ResponseBody> {
        return this.request({
            url: `/item/refreshPalette`,
            method: 'post',
            data: { id },
        })
    }
    /**
     * 修改项目信息
     */
    async update(data: UpdateParameters): Promise<ResponseBody> {
        return this.request({
            url: `/item/refreshPalette`,
            method: 'post',
            data,
        })
    }
}

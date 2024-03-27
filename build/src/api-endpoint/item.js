"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const base_1 = require("./base");
class Item extends base_1.Base {
    /**
     * 从链接添加文件
     */
    async addFromURL(data) {
        return this.request({
            url: `/item/addFromURL`,
            method: 'post',
            data,
        });
    }
    /**
     * 从多个链接添加文件
     */
    async addFromURLs(data) {
        return this.request({
            url: `/item/addFromURLs`,
            method: 'post',
            data,
        });
    }
    /**
     * 添加本地文件
     */
    async addFromPath(data) {
        return this.request({
            url: `/item/addFromPath`,
            method: 'post',
            data,
        });
    }
    /**
     * 添加多个本地文件
     */
    async addFromPaths(data) {
        return this.request({
            url: `/item/addFromPaths`,
            method: 'post',
            data,
        });
    }
    /**
     * 添加书签
     */
    async addBookmark(data) {
        return this.request({
            url: `/item/addBookmark`,
            method: 'post',
            data,
        });
    }
    /**
     * 详情
     */
    async info(id) {
        return this.request({
            url: `/item/info?token=${this.opts.token}&id=${id}`,
        });
    }
    /**
     * 移到回收站
     */
    async moveToTrash(itemIds) {
        return this.request({
            url: `/item/moveToTrash`,
            method: 'post',
            data: { itemIds },
        });
    }
    /**
     * 获取缩略图
     */
    async thumbnail(id) {
        return this.request({
            url: `/item/thumbnail?token=${this.opts.token}&id=${id}`,
        });
    }
    /**
     * 刷新缩略图
     */
    async refreshThumbnail(id) {
        return this.request({
            url: `/item/refreshThumbnail`,
            method: 'post',
            data: { id },
        });
    }
    /**
     * 项目列表
     */
    async list(data) {
        return this.request({
            url: `/item/list`,
            method: 'post',
            data,
        });
    }
    /**
     * 重新分析颜色
     */
    async refreshPalette(id) {
        return this.request({
            url: `/item/refreshPalette`,
            method: 'post',
            data: { id },
        });
    }
    /**
     * 修改项目信息
     */
    async update(data) {
        return this.request({
            url: `/item/refreshPalette`,
            method: 'post',
            data,
        });
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
const base_1 = require("./base");
class Folder extends base_1.Base {
    /**
     * 创建（子）文件夹
     */
    async create(data) {
        return this.request({
            url: `/folder/create`,
            method: 'post',
            data,
        });
    }
    /**
     * 重命名
     */
    async rename(data) {
        return this.request({
            url: `/folder/rename`,
            method: 'post',
            data,
        });
    }
    /**
     * 更新
     */
    async update(data) {
        return this.request({
            url: `/folder/update`,
            method: 'post',
            data,
        });
    }
    /**
     * 列表
     */
    async list() {
        return this.request({
            url: `/folder/list`,
        });
    }
    /**
     * 最近使用列表
     */
    async listRecent() {
        return this.request({
            url: `/folder/listRecent`,
        });
    }
}
exports.Folder = Folder;
//# sourceMappingURL=folder.js.map
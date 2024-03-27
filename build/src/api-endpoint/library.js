"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const base_1 = require("./base");
class Library extends base_1.Base {
    /**
     * 资源库信息
     */
    async info() {
        return this.request({
            url: `/library/info?token=${this.opts.token}`,
        });
    }
    /**
     * 资源库列表
     */
    async hisroty() {
        return this.request({
            url: `/library/history?token=${this.opts.token}`,
        });
    }
    /**
     * 切换资源库
     * @param libraryPath 资源库路径 eg:/Users/augus/Pictures/Design.library
     */
    async switch(libraryPath) {
        return this.request({
            url: `/library/switch`,
            method: 'post',
            data: { libraryPath },
        });
    }
}
exports.Library = Library;
//# sourceMappingURL=library.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const base_1 = require("./base");
class Application extends base_1.Base {
    /**
     * 应用版本信息
     */
    async info() {
        return this.request({
            url: `/application/info?token=${this.opts.token}`,
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map
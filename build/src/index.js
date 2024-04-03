"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EagleSDK = void 0;
const axios_1 = require("axios");
const application_1 = require("./api-endpoint/application");
const folder_1 = require("./api-endpoint/folder");
const item_1 = require("./api-endpoint/item");
const library_1 = require("./api-endpoint/library");
class EagleSDK {
    constructor(opts) {
        this.opts = {
            host: 'http://localhost:41595/api',
            timeoutMs: 60000,
            ...opts,
        };
        this.application = new application_1.Application(this.request, this.opts);
        this.folder = new folder_1.Folder(this.request, this.opts);
        this.item = new item_1.Item(this.request, this.opts);
        this.library = new library_1.Library(this.request, this.opts);
    }
    /**
     *
     * @param payload
     * @returns
     */
    async request({ url, method, data }) {
        let res = { data: { status: '', data: {} } };
        try {
            const config = {
                method: method || 'get',
                url: `${this.opts.host}${url}`,
                timeout: this.opts.timeoutMs,
                data: { token: this.opts.token, ...(data || {}) },
            };
            res = await axios_1.default.request(config);
            if (!res || !res.data) {
                console.log(url, res.data);
                throw new Error(url + ' - 请求失败');
            }
        }
        catch (err) {
            console.log('err', err);
        }
        return res.data;
    }
}
exports.EagleSDK = EagleSDK;
//# sourceMappingURL=index.js.map
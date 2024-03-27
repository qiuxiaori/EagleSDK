"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerifyString = exports.addVerifyInfo = exports.md5 = void 0;
const axios_1 = require("axios");
const crypto = require('crypto');
function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}
exports.md5 = md5;
function addVerifyInfo(params, verifyString) {
    const searchParams = new URLSearchParams(params);
    searchParams.sort();
    const verifyParam = searchParams.toString();
    const wts = Math.round(Date.now() / 1000);
    const w_rid = md5(`${verifyParam}&wts=${wts}${verifyString}`);
    return `${params}&w_rid=${w_rid}&wts=${wts}`;
}
exports.addVerifyInfo = addVerifyInfo;
async function getVerifyString(cookie) {
    const { data: navResponse } = await axios_1.default.request({
        url: `https://api.bilibili.com/x/web-interface/nav`,
        headers: {
            Referer: 'https://www.bilibili.com/',
            Cookie: cookie,
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        },
    });
    const imgUrl = navResponse.data.wbi_img.img_url;
    const subUrl = navResponse.data.wbi_img.sub_url;
    const r = imgUrl
        .substring(imgUrl.lastIndexOf('/') + 1, imgUrl.length)
        .split('.')[0] +
        subUrl
            .substring(subUrl.lastIndexOf('/') + 1, subUrl.length)
            .split('.')[0];
    const data = await axios_1.default.request({
        url: 'https://s1.hdslb.com/bfs/seed/laputa-header/bili-header.umd.js',
        headers: {
            Referer: 'https://space.bilibili.com/1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        },
    });
    const array = JSON.parse(data.data.match(/\[(?:\d+,){63}\d+\]/));
    const o = [];
    array.forEach((t) => {
        r.charAt(t) && o.push(r.charAt(t));
    });
    return o.join('').slice(0, 32);
}
exports.getVerifyString = getVerifyString;
//# sourceMappingURL=utils.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('Library', () => {
    const sdk = new __1.default({
        token: '1364ff15-4a7c-470b-9124-7739101c367b',
    });
    beforeAll(() => { });
    describe('hisroty', () => {
        it('success', async () => {
            let res = await sdk.library.info();
            expect(res.data.library.name).toEqual('qiuxiaori');
            res = await sdk.library.hisroty();
            expect(res.data.length).not.toEqual(0);
            res = await sdk.library.switch('C:\\Users\\qiuxiaori\\Favorites\\qiuxiaoyue.library');
            expect(res.status).toEqual('success');
            res = await sdk.library.switch('C:\\Users\\qiuxiaori\\Favorites\\qiuxiaori.library');
            expect(res.status).toEqual('success');
        });
    });
});
//# sourceMappingURL=library.test.js.map
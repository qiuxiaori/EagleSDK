"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('Application', () => {
    const sdk = new src_1.EagleSDK({
        token: '1364ff15-4a7c-470b-9124-7739101c367b',
    });
    beforeAll(() => { });
    describe('info', () => {
        it('success', async () => {
            let res = await sdk.application.info();
            expect(res.data.version).toEqual('3.0.0');
        });
    });
});
//# sourceMappingURL=application.test.js.map
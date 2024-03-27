"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe('Application', () => {
    const sdk = new __1.default({
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
//# sourceMappingURL=item.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe('Folder', () => {
    const sdk = new src_1.EagleSDK({
        token: '1364ff15-4a7c-470b-9124-7739101c367b',
    });
    beforeAll(() => { });
    describe('create', () => {
        it('success', async () => {
            let list1 = await sdk.folder.list();
            let res = await sdk.folder.create({ folderName: '测试' });
            let folderId = res.data.id;
            expect(res.data.name).toEqual('测试');
            res = await sdk.folder.create({ folderName: '测试2', parent: folderId });
            expect(res.data.name).toEqual('测试2');
            let list2 = await sdk.folder.list();
            expect(list2.data.length).toEqual(list1.data.length + 1);
        });
    });
    describe('listRecent', () => {
        it('success', async () => {
            let list1 = await sdk.folder.listRecent();
            expect(list1.data.length).not.toEqual(0);
        });
    });
    describe.skip('rename', () => {
        it('success', async () => {
            let res = await sdk.folder.create({ folderName: '测试' });
            let folderId = res.data.id;
            res = await sdk.folder.rename({ folderId, newName: '新测试' });
            expect(res.data.name).toEqual('新测试');
            res = await sdk.folder.update({ folderId, newName: '新新测试' });
            expect(res.data.name).toEqual('新新测试');
        });
    });
});
//# sourceMappingURL=folder.test.js.map
import EagleSDK from '..'
const fs = require('fs')

describe('Item', () => {
    const sdk = new EagleSDK({
        token: '1364ff15-4a7c-470b-9124-7739101c367b',
    })

    beforeAll(() => {})

    describe('addFromURL', () => {
        it('success', async () => {
            let res = await sdk.item.addFromURL({
                url: 'http://i2.hdslb.com/bfs/archive/b3fa0651a11b32d45de6c77e465dc01ddc004427.jpg',
                name: 'BV1ya411g7BG',
            })
            expect(res.status).toEqual('success')
        })
    })

    describe('addFromURLs', () => {
        it('success', async () => {
            const file = await fs.readFileSync('./videos.json')
            let videos = JSON.parse(file)
            const items = videos.map((v: any) => {
                return { url: v.pic, name: v.bvid }
            })

            let res = await sdk.item.addFromURLs({
                items: items,
            })
            expect(res.status).toEqual('success')
        })
    })
})

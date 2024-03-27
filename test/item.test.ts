import EagleSDK from '..'

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
            let res = await sdk.item.addFromURLs({
                items: [{ url: 'http://i0.hdslb.com/bfs/archive/6ffcab96d2d8429cc67667ac2eabab5f0a14ced0.jpg', name: 'BV1xe4y1Y7Jv' }],
            })
            expect(res.status).toEqual('success')
        })
    })
})

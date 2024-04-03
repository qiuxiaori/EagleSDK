import EagleSDK from '../src'

describe('Application', () => {
    const sdk = new EagleSDK({
        token: '1364ff15-4a7c-470b-9124-7739101c367b',
    })

    beforeAll(() => {})

    describe('info', () => {
        it('success', async () => {
            let res = await sdk.application.info()
            expect(res.data.version).toEqual('3.0.0')
        })
    })
})

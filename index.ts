import axios from 'axios'
import { Application } from './src/api-endpoint/application'
import { Folder } from './src/api-endpoint/folder'
import { Item } from './src/api-endpoint/item'
import { Library } from './src/api-endpoint/library'

type Method = 'get' | 'post' | 'patch' | 'delete'
type Token = string
export type WithToken<P> = P & { token: Token }
export type SDKOptions = {
    token: string
    host?: string
    timeoutMs?: number
}
export type RequestParameters = {
    url: string
    method?: Method
    data?: any
}
export type ResponseBody = {
    status: string
    data?: any
}

export default class EagleSDK implements EagleSDKImpl {
    public opts: SDKOptions
    public readonly application: Application
    public readonly folder: Folder
    public readonly item: Item
    public readonly library: Library

    public constructor(opts: SDKOptions) {
        this.opts = {
            host: 'http://localhost:41595/api',
            timeoutMs: 60_000,
            ...opts,
        }
        this.application = new Application(this.request, this.opts)
        this.folder = new Folder(this.request, this.opts)
        this.item = new Item(this.request, this.opts)
        this.library = new Library(this.request, this.opts)
    }
    /**
     *
     * @param payload
     * @returns
     */
    public async request({ url, method, data }: RequestParameters): Promise<ResponseBody> {
        let res = { data: { status: '', data: {} } }
        try {
            const config = {
                method: method || 'get',
                url: `${this.opts.host}${url}`,
                timeout: this.opts.timeoutMs,
                data: { token: this.opts.token, ...(data || {}) },
            }
            res = await axios.request(config)
            if (!res || !res.data) {
                console.log(url, res.data)
                throw new Error(url + ' - 请求失败')
            }
        } catch (err) {
            console.log('err', err)
        }
        return res.data
    }
}

export interface EagleSDKImpl {
    request(payload: RequestParameters): Promise<ResponseBody>
}

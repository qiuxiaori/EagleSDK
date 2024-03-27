import { Application } from './api-endpoint/application';
import { Folder } from './api-endpoint/folder';
import { Item } from './api-endpoint/item';
import { Library } from './api-endpoint/library';
type Method = 'get' | 'post' | 'patch' | 'delete';
type Token = string;
export type WithToken<P> = P & {
    token: Token;
};
export type SDKOptions = {
    token: string;
    host?: string;
    timeoutMs?: number;
};
export type RequestParameters = {
    url: string;
    method?: Method;
    data?: any;
};
export type ResponseBody = {
    status: string;
    data?: any;
};
export default class EagleSDK implements EagleSDKImpl {
    opts: SDKOptions;
    readonly application: Application;
    readonly folder: Folder;
    readonly item: Item;
    readonly library: Library;
    constructor(opts: SDKOptions);
    /**
     *
     * @param payload
     * @returns
     */
    request({ url, method, data }: RequestParameters): Promise<ResponseBody>;
}
export interface EagleSDKImpl {
    request(payload: RequestParameters): Promise<ResponseBody>;
}
export {};
//# sourceMappingURL=index.d.ts.map
export interface SDKOptions {
    host?: string;
    token: string;
    timeoutMs?: number;
}
export declare const enum Method {
    Get = "get",
    Post = "post",
    Patch = "patch",
    Delete = "delete"
}
export interface uestParameters {
    url: string;
    method?: Method;
    baseURL?: string;
    params?: any;
    data?: any;
    wbi?: boolean;
}
export interface ResponseBody {
    status: string;
    data?: any;
}
//# sourceMappingURL=types.d.ts.map
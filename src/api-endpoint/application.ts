import { ResponseBody } from '../index'
import { Base } from './base'

export class Application extends Base {
    /**
     * 应用版本信息
     */
    async info(): Promise<ResponseBody> {
        return this.request({
            url: `/application/info?token=${this.opts.token}`,
        })
    }
}

import { ResponseBody } from '../../index'
import { Base } from './base'

export class Library extends Base {
    /**
     * 资源库信息
     */
    async info(): Promise<ResponseBody> {
        return this.request({
            url: `/library/info?token=${this.opts.token}`,
        })
    }
    /**
     * 资源库列表
     */
    async hisroty(): Promise<ResponseBody> {
        return this.request({
            url: `/library/history?token=${this.opts.token}`,
        })
    }
    /**
     * 切换资源库
     * @param libraryPath 资源库路径 eg:/Users/augus/Pictures/Design.library
     */
    async switch(libraryPath: string): Promise<ResponseBody> {
        return this.request({
            url: `/library/switch`,
            method: 'post',
            data: { libraryPath },
        })
    }
}

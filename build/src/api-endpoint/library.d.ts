import { ResponseBody } from '../index';
import { Base } from './base';
export declare class Library extends Base {
    /**
     * 资源库信息
     */
    info(): Promise<ResponseBody>;
    /**
     * 资源库列表
     */
    hisroty(): Promise<ResponseBody>;
    /**
     * 切换资源库
     * @param libraryPath 资源库路径 eg:/Users/augus/Pictures/Design.library
     */
    switch(libraryPath: string): Promise<ResponseBody>;
}
//# sourceMappingURL=library.d.ts.map
import { EagleSDKImpl } from '../..'
import { SDKOptions } from '../../index'

export class Base {
    constructor(
        readonly request: EagleSDKImpl['request'],
        readonly opts: SDKOptions
    ) {}
}

// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportArea = require('../../../app/service/area');
import ExportCache = require('../../../app/service/cache');
import ExportCommon = require('../../../app/service/common');
import ExportMedia = require('../../../app/service/media');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    area: AutoInstanceType<typeof ExportArea>;
    cache: AutoInstanceType<typeof ExportCache>;
    common: AutoInstanceType<typeof ExportCommon>;
    media: AutoInstanceType<typeof ExportMedia>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}

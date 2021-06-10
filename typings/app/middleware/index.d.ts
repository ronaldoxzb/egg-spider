// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportNotfoundHandler = require('../../../app/middleware/notfound_handler');
import ExportPagination = require('../../../app/middleware/pagination');

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    notfoundHandler: typeof ExportNotfoundHandler;
    pagination: typeof ExportPagination;
  }
}

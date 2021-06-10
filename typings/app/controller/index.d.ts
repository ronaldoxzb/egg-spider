// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiArea = require('../../../app/controller/api/area');
import ExportApiMock = require('../../../app/controller/api/mock');
import ExportApiSystem = require('../../../app/controller/api/system');
import ExportApiUser = require('../../../app/controller/api/user');
import ExportApiYuque = require('../../../app/controller/api/yuque');
import ExportViewPage = require('../../../app/controller/view/page');
import ExportApiToolEmail = require('../../../app/controller/api/tool/email');

declare module 'egg' {
  interface IController {
    api: {
      area: ExportApiArea;
      mock: ExportApiMock;
      system: ExportApiSystem;
      user: ExportApiUser;
      yuque: ExportApiYuque;
      tool: {
        email: ExportApiToolEmail;
      }
    }
    view: {
      page: ExportViewPage;
    }
  }
}

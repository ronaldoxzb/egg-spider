// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-mailer';
import 'egg-swagger-doc';
import 'egg-redis';
import 'egg-sequelize';
import 'egg-validate';
import 'egg-view-nunjucks';
import 'egg-jwt';
import 'egg-router-plus';
import 'egg-cors';
import 'egg-oss';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    mailer?: EggPluginItem;
    swaggerdoc?: EggPluginItem;
    redis?: EggPluginItem;
    sequelize?: EggPluginItem;
    validate?: EggPluginItem;
    nunjucks?: EggPluginItem;
    jwt?: EggPluginItem;
    routerPlus?: EggPluginItem;
    cors?: EggPluginItem;
    oss?: EggPluginItem;
  }
}
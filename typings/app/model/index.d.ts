// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCities = require('../../../app/model/cities');
import ExportDistricts = require('../../../app/model/districts');
import ExportProvinces = require('../../../app/model/provinces');
import ExportTowns = require('../../../app/model/towns');
import ExportUser = require('../../../app/model/user');
import ExportVillages = require('../../../app/model/villages');

declare module 'egg' {
  interface IModel {
    Cities: ReturnType<typeof ExportCities>;
    Districts: ReturnType<typeof ExportDistricts>;
    Provinces: ReturnType<typeof ExportProvinces>;
    Towns: ReturnType<typeof ExportTowns>;
    User: ReturnType<typeof ExportUser>;
    Villages: ReturnType<typeof ExportVillages>;
  }
}

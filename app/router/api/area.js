"use strict";

module.exports = (app) => {
  const { controller, middleware, apiV1Router } = app;
  // 同步区域数据
  apiV1Router.get(
    "/areasync/:year",
    middleware.pagination,
    app.jwt,
    controller.api.area.areaSync
  );
  // 过省code查询树形数据
  apiV1Router.get(
    "/getareadata/:code",
    app.jwt,
    controller.api.area.getAreaData
  );
  // 获取所有省数据
  apiV1Router.get(
    "/getallprovince",
    app.jwt,
    controller.api.area.getAllProvince
  );
  // 获取区域数量
  apiV1Router.get("/getareanumber", app.jwt, controller.api.area.getAreaNumber);
};

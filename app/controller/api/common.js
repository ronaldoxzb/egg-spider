// app/controller/common.js
"use strict";
const Controller = require("../../core/base_controller");
const fs = require("mz/fs");
const path = require("path");
class CommonController extends Controller {
  // 上传
  async upload() {
    const { ctx, app } = this;
    if (!ctx.request.files.length) {
      return ctx.helper.fail({ ctx, res: "请选择文件上传！" });
    }
    const files = ctx.request.files;
    let res = [];
    for (const file of files) {
      const filePath = file.filepath;
      const fileName = file.filename;
      let result;
      const tempFileName =
        "egg-oss/" + app.genID(10) + path.extname(fileName).toLocaleLowerCase();
      try {
        // 处理文件，比如上传到云端
        result = await ctx.oss.put("ronaldo/" + tempFileName, filePath);
      } finally {
        // 需要删除临时文件
        await fs.unlink(filePath);
      }
      res.push({ name: fileName, url: result.url });
    }
    if (res.length > 0) {
      return ctx.helper.success({ ctx, res });
    }
    ctx.helper.fail({ ctx, res: "文件上传失败！" });
  }
  async localUpload() {
    const { ctx } = this;
    const { url, name } = await this.uploadFile("media");
    ctx.helper.success({ ctx, res: { url, name } });
  }
}

module.exports = CommonController;

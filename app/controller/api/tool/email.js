"use strict";

const Controller = require("egg").Controller;
/**
* @controller EmailController(系统信息)
*/
class EmailController extends Controller {
  /**
   * 获取语雀个人信息
   */
   async index() {
    const { ctx, app } = this;
    // sync
    const res = await app.mailer.send({
      from: '1101781068@qq.com',
      // Array => ['bar@example.com', 'baz@example.com']
      to: ['2211484616@qq.com', 'queenxzb@163.com'], // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello Baby How Are you?</b>" // html body
    });
    ctx.helper.success({ ctx, res });
    // async
    // app.mailer.send({
    //   from: '"Fred Foo 👻" <foo@example.com>',
    //   // Array => ['bar@example.com', 'baz@example.com']
    //   to: "bar@example.com, baz@example.com",
    //   subject: "Hello ✔",
    //   text: "Hello world?",
    //   html: "<b>Hello world?</b>"
    // }, function (err, info) {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(info);
    // });
    // ctx.body = 'hi, mailer';
  }
}

module.exports = EmailController;

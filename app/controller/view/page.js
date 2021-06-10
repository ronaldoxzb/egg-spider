'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')

class PageController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index');
  }
  async tool() {
    const { ctx } = this
    await ctx.render('tool')
  }
}

module.exports = PageController;

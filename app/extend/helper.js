'use stricts'

const crypto = require('crypto')
const XLSX = require('xlsx');
module.exports = {
  /**
   * 加密
   * @param {String} str            需要加密的字符串
   */
  bhash: str => {
    var md5 = crypto.createHash('md5')
    return md5.update(str).digest('hex')
  },

  /**
   * 比对
   * @param {String} str            传入的字符串
   * @param {String} hash           比对的hash值
   */
  bcompare: (str, hash) => {
    var md5 = crypto.createHash('md5')
    return md5.update(str).digest('hex') === hash
  },

  /**
   * 分页器
   * @param {object} page           分页器
   * @param {string} pageField      排序字段
   * @param {string} pageSort       排序方向（DESC, ASC）
   * @param {number} pageSize       分页大小
   * @param {number} pageIndex      分页索引
   * return {object}
   */
  pagination: page => {
    const { pageField, pageSort, pageSize, pageIndex } = page
    const order = [[pageField, pageSort]]
    const offset = (pageIndex - 1) * pageSize
    const limit = pageSize

    return { order, offset, limit }
  },

  /**
   * 错误码
   */
  errorCode: {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
    510: '余额不足。',
    511: '不是VIP，无法暂停VIP服务。',
  },

  /**
   * 处理成功请求后的响应
   */
  success: ({ ctx, code = 200, res = {}, msg }) => {
    if (!res) code = 404
    ctx.status = 200
    ctx.body = {
      code: code,
      message: msg || ctx.helper.errorCode[code],
      data: res
    }
  },

  /**
   * 处理失败请求后的响应
   */
  fail: ({ ctx, code = 500, res = {}, msg }) => {
    ctx.status = 200
    ctx.body = {
      code: code,
      message: msg || ctx.helper.errorCode[code],
      data: res
    }
  },

  /**
   * http请求封装
   */
  request: async ({ctx, method = 'GET', url='', headers = {}, dataType = '', data = {}}) => {
    const result = await ctx.curl(url, {
      method: method,
      contentType: 'json',
      headers,
      dataType,
      data: data,
    })
    return result
  },

  /**
   * 加密
   * @param {object} data 需要加密的数据
   */
  encryptSha1: (data) => {
    return crypto.createHash('sha1').update(data,'utf8').digest('hex');
  },
  /**
   * 导出excel文件
   * @param {*} fileName 文件名
   * @param {*} sheetName excel表名
   * @param {*} header 表头
   * @param {*} data 数据
   */
  exportXLSX: (
    ctx,
    fileName = 'file',
    sheetName = 'sheet1',
    header,
    data,
  ) => { 
    // 生成workbook
    const workbook = XLSX.utils.book_new();
    // 插入表头
    const headerData = [header, ...data];
    // 生成worksheet
    const worksheet = XLSX.utils.json_to_sheet(headerData, { skipHeader: true });
    // 组装
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  
    // 返回数据流
    // @ts-ignore
    ctx.set('Content-Type', 'application/vnd.openxmlformats');
    // @ts-ignore
    ctx.set(
      'Content-Disposition',
      "attachment;filename*=UTF-8' '" + encodeURIComponent(fileName) + '.xlsx',
    );
    // @ts-ignore
    ctx.body = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'buffer',
    });
  },
  // 羽雀接口地址
  yuqueApi: 'https://www.yuque.com/api/v2',
  // Token 用于客户端 / API
  yuqueToken: 'qqrEN6quujVTnJ5UYXU0k6w1MSMswLoP7YtxTZNV'
}
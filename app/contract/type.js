module.exports = {
    // 默认接口类型
    JsonResult: { //@response 200 JsonResult 操作结果，名字与相应结果对应
        code: { type: 'integer', example: 200, description: '返回code'},
        message: { type: 'string' },    // 结果
        results: { type: 'array', itemType: 'array' }     // 服务器返回的数据
    },
}
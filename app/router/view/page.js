'use strict'

module.exports = app => {
  const { controller, router } = app
  router.get('/', controller.view.page.index)
  router.get('/tool', controller.view.page.tool)
}

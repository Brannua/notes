'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  // get方式获取参数的两种方式
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail2/:id', controller.product.detail2);
  // post请求
  router.post('/product/create', controller.product.create);
  router.put('/product/update/:id', controller.product.update);
  router.delete('/product/delete/:id', controller.product.delete);
};

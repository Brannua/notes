'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    ctx.body = res;
  }

  async detail() {
    const { ctx } = this;
    ctx.body = `id = ${ctx.query.id}`;
  }

  async detail2() {
    const { ctx } = this;
    ctx.body = `id = ${ctx.params.id}`;
  }

  async create() {
    const { ctx } = this;
    const { name, weight } = ctx.request.body;
    ctx.body = {
      name,
      weight,
    };
  }

  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = {
      id,
    };
  }

  async delete() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = {
      id,
    };
  }
}

module.exports = ProductController;

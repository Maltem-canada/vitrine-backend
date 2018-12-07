'use strict';

/**
 * Benefit.js controller
 *
 * @description: A set of functions called "actions" for managing `Benefit`.
 */

module.exports = {

  /**
   * Retrieve benefit records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.benefit.search(ctx.query);
    } else {
      return strapi.services.benefit.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a benefit record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.benefit.fetch(ctx.params);
  },

  /**
   * Count benefit records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.benefit.count(ctx.query);
  },

  /**
   * Create a/an benefit record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.benefit.add(ctx.request.body);
  },

  /**
   * Update a/an benefit record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.benefit.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an benefit record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.benefit.remove(ctx.params);
  }
};

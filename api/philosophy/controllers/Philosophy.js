'use strict';

/**
 * Philosophy.js controller
 *
 * @description: A set of functions called "actions" for managing `Philosophy`.
 */

module.exports = {

  /**
   * Retrieve philosophy records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.philosophy.search(ctx.query);
    } else {
      return strapi.services.philosophy.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a philosophy record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.philosophy.fetch(ctx.params);
  },

  /**
   * Count philosophy records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.philosophy.count(ctx.query);
  },

  /**
   * Create a/an philosophy record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.philosophy.add(ctx.request.body);
  },

  /**
   * Update a/an philosophy record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.philosophy.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an philosophy record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.philosophy.remove(ctx.params);
  }
};

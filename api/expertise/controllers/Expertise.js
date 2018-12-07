'use strict';

/**
 * Expertise.js controller
 *
 * @description: A set of functions called "actions" for managing `Expertise`.
 */

module.exports = {

  /**
   * Retrieve expertise records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.expertise.search(ctx.query);
    } else {
      return strapi.services.expertise.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a expertise record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.expertise.fetch(ctx.params);
  },

  /**
   * Count expertise records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.expertise.count(ctx.query);
  },

  /**
   * Create a/an expertise record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.expertise.add(ctx.request.body);
  },

  /**
   * Update a/an expertise record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.expertise.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an expertise record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.expertise.remove(ctx.params);
  }
};

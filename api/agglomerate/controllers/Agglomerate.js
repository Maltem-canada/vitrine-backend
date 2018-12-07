'use strict';

/**
 * Agglomerate.js controller
 *
 * @description: A set of functions called "actions" for managing `Agglomerate`.
 */

module.exports = {

  /**
   * Retrieve agglomerate records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.agglomerate.search(ctx.query);
    } else {
      return strapi.services.agglomerate.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a agglomerate record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.agglomerate.fetch(ctx.params);
  },

  /**
   * Count agglomerate records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.agglomerate.count(ctx.query);
  },

  /**
   * Create a/an agglomerate record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.agglomerate.add(ctx.request.body);
  },

  /**
   * Update a/an agglomerate record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.agglomerate.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an agglomerate record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.agglomerate.remove(ctx.params);
  }
};

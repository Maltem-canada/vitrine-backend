'use strict';

/**
 * Filiale.js controller
 *
 * @description: A set of functions called "actions" for managing `Filiale`.
 */

module.exports = {

  /**
   * Retrieve filiale records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.filiale.search(ctx.query);
    } else {
      return strapi.services.filiale.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a filiale record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.filiale.fetch(ctx.params);
  },

  /**
   * Count filiale records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.filiale.count(ctx.query);
  },

  /**
   * Create a/an filiale record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.filiale.add(ctx.request.body);
  },

  /**
   * Update a/an filiale record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.filiale.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an filiale record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.filiale.remove(ctx.params);
  }
};

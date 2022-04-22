'use strict'

/**
 *  portfolio controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::portfolio.portfolio',
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx

      const entity = await strapi.entityService.findMany(
        'api::portfolio.portfolio',
        {
          ...query,
          populate: {
            projets: {
              populate: {
                image: true,
              },
            },
          },
        },
      )
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

      return this.transformResponse(sanitizedEntity)
    },
  }),
)

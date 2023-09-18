'use strict';

/**
 * spam controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::spam.spam');

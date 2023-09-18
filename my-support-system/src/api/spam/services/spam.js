'use strict';

/**
 * spam service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spam.spam');

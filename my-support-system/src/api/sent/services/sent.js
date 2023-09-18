'use strict';

/**
 * sent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sent.sent');

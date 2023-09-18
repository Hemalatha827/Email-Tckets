'use strict';

/**
 * wait service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wait.wait');

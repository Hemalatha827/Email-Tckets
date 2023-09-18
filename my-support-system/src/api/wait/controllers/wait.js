'use strict';

/**
 * wait controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wait.wait');

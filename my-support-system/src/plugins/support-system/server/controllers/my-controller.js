'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('support-system')
      .service('myService')
      .getWelcomeMessage();
  },
});

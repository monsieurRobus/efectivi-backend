'use strict';

/**
 * setlist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::setlist.setlist');

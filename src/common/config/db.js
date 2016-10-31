'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'xmg_mui',
      user: 'root',
      password: '',
      prefix: 'xmg_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};

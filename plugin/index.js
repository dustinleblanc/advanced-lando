'use strict';

module.exports = (app, lando) => {
  // Log that this plugin has loaded
  lando.events.on('post-bootstrap-config', () => {
    lando.log.info('Custom plugin loaded!');
  });

  // Merge some stuff into the lando object and its config
  return {
    customModule: require('./lib/customMod'),
    config: {
      mySetting: true,
      domain: 'mydomain.com',
    };
  };
};


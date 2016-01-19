/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'apollo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      // Deny everything by default
      'default-src': "'none'",

      // Allow scripts
      'script-src': ["'self'", "localhost:49152"],

      // Allow fonts
      'font-src': ["'self'"],

      // Allow data
      'connect-src': ["'self'", "localhost:4200"],

      // Allow images
      'img-src': "'self'",

      // Allow inline styles and loaded CSS
      'style-src': ["'self'", "'unsafe-inline'"],

      // `media-src` will be omitted from policy
      // Browser will fallback to default-src for media resources
      'media-src': null
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

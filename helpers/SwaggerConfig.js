const swaggerConfig = {
  swaggerDefinition: {
    info: {
      description: 'author: A.H.Welgemoed',
      title: 'WARP FRONT-END TEST  SWAGGER',
      version: '1.0.0',
    },
    host: `localhost:${process.env.PORT || 4000}`,
    basePath: '/v1',
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https'],
  },
  basedir: __dirname,
  files: ['../rest/routes/**/*.js'], //Path to Routes
};

module.exports = swaggerConfig;

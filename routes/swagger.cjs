const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'VIZOR viBACK API',
      version: '3.0.0',
      description: 'VTRAPP API',
    },
  },
  apis: ['routes/vBack/routes/backendServices.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;

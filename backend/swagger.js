// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Swagger versiyonu
    info: {
      title: 'Notification API', // API başlığı
      version: '1.0.0', // API versiyonu
      description: 'Notification API Dokümantasyonu', // API açıklaması
      contact: {
        name: 'Geliştirici', // Geliştirici bilgisi
      },
      servers: [
        {
          url: 'http://localhost:3001', // API sunucusu
        },
      ],
    },
  },
  // API route'larının bulunduğu dosyalar
  apis: ['./routes/*.js'], // Route dosyalarınızın yolunu belirtin
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
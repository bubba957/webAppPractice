const swaggerAutogen = require('swagger-autogen');

// The header for the swagger.json
const doc = {
    info: {
        title: 'Portfolios Api',
        description: 'Portfolios Api'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

// The output/endpoint to inject into the swagger.json file
const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

// This will generate swagger.json
swaggerAutogen(outputFile, endpointsFile, doc);
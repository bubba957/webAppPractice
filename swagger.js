const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'Portfolios Api',
        description: 'Portfolios Api'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

// This will generate swagger.json
swaggerAutogen(outputFile, endpointsFile, doc);
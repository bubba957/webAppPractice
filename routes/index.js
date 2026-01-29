const router = require('express').Router();

// Require swagger
router.use('/', require('./swagger'))

// The page that opens when you put in localhost:3000
router.get('/', (req, res) => {
    res.send('This is a website were you can view different portfolios. Just add into the website \
        name "/portfolios" to view them. You can also make it "/portfolios/{id}" to get a single \
        portfolio of your choosing. The skies the limit so have fun.'); 
});

// The portfolio page
router.use('/portfolios', require('./portfolios'));

module.exports = router;
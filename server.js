const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl')
const app = express();

mongoose.connect('mongodb://localhost/url-shortener', {
    useNewUrlParser: true, useUnifiedTopology: true
});


app.set('view engine', 'ejs');
// tell express we use url parameters
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl });
    res.redirect('/');
})

app.listen(process.env.PORT || 5000);
var express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');

require('./hbs/helpers.js');

app.use(express.static(__dirname + '/public'))

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Ivan'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
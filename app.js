require('dotenv').config()
const express = require('express')
var hbs = require('hbs');
const app = express();

const puerto = process.env.PORT



// Handlerbars

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home',
        {
            nombre: 'Leandro Almirón',
            titulo: 'Curso de node'
        })
})

app.get('/generic', (req, res) => {
    res.render('generic',
        {
            nombre: 'Leandro Almirón',
            titulo: 'Curso de node'
        })
})

app.get('/elements', (req, res) => {
    res.render('elements',
        {
            nombre: 'Leandro Almirón',
            titulo: 'Curso de node'
        })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(puerto, () => {
    console.log(`Esta app esta escuchando en localhost/${puerto}`);
})
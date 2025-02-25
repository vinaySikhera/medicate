const express = require('express');
require("dotenv").config();
const path = require('path')

const app = express();
const PORT = 3003;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home', { title: "home page" });
})
app.get('/navbar', (req, res) => {
    res.render('common/navbar');
})
app.get('/footer', (req, res) => {
    res.render('common/footer');
})
app.get('/progressBar', (req, res) => {
    res.render('progressBar');
})
app.get('/contactUs', (req, res) => {
    res.render('contactUs');
})

app.listen(PORT, () => {
    console.log('server is running http://localhost:', PORT)
});
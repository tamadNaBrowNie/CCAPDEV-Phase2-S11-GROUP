const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));



const port = 3000;
app.listen(port, function(){
    console.log('Listening to port ' + port);
});


app.get('/', ( req, res ) => {
    res.render("main");
})

app.get('/login', ( req, res ) => {
    res.render("login");
})

app.get('/logout', ( req, res ) => {
    res.render("logout");
})

app.get('/recoverAcc', ( req, res ) => {
    res.render("recoverAcc");
})

app.get('/register', ( req, res ) => {
    res.render("register");
})

app.get('/search', ( req, res ) => {
    res.render("search");
})

app.get('/*', ( req, res ) => {
    res.render("404notfound");
})
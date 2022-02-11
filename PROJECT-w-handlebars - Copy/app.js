const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

//check if I need this
const Post = require('./database/models/Post')

mongoose.connect('mongodb://loclahost/accont-db');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');
var hbs = require('hbs')

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

app.post('/submit-post', function(req, res) {
    Post.create(req.body, (error, post) =>
    {
        res.redirect('/')
    })
});
//need to add content html
app.get('/content', async(req,res) => {
    const posts = await Post.find({})
    res.render('content',{posts})
})

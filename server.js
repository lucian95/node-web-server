const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home page',
		welcomeMessage: 'Welcome to our website!'
	});
});

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {pageTitle: 'Projects'});
});

app.get('/about', (req, res) => {
	res.render('about.hbs',{
		pageTitle: 'About page'
	});
});


app.listen(port, () => {console.log(`Server up on port ${port}`);});

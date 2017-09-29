const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.use((req, res, next) => {
	res.render('maintenance.hbs');
});
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home page',
		welcomeMessage: 'Welcome to our website!',
		anotherMessage: 'The message should be visible'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs',{
		pageTitle: 'About page'
	});
});

app.get('/bad', (req, res) => {
	res.send({errorMessage: 'Error! Computer will self-destruct!'});
});

app.get('/indirecthelp', (req, res) => {
	res.sendFile(__dirname + '/public/help.html');
});

app.listen(port, () => {console.log(`Server up on port ${port}`);});

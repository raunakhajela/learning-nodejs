/*

heroku keys:add => adding our ssh key to heroku

heroku keys => shows all hroku keys

heroku keys:remove => removes our ssh key added on heroku

ssh -v git@heroku.com => communicate through heroku servers (run this on git bash)

*/
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//process.env stores all environment variables as key-value pairs
//if process.PORT will not exist then we set port 3000
const port = process.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

//maintenance.hbs will stop code below this line to stop executing

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
})

//we make port dynamic for heroku to use
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

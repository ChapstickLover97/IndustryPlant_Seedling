const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// routes
app.get('/', (req, res) => {
  res.send(`
  <h1>LANDING PAGE HTML GOES HERE</h1>
  `)
})

 app.get('/login', (req, res) => {
  res.send(`
  <h1>LOGIN HTML GOES HERE</h1>
  `)
 })

 app.get('/search', (req, res) => {
    res.send(`
    <h1>SEARCH STUFF HTML GOES HERE</h1>
    `)
 })

 app.get('/music-review', (req, res) => {
  res.send(`
  <h1>MUSIC REVIEW HTML GOES HERE</h1>
  `)
 })
 
 // Handlebars
 app.get('/artist-list', () => {
  
 })

 post.get('/login', () => {

 })

 post.get('/search', () => {
  
 })
 
 post.get('/music-review', () => {
  
 })
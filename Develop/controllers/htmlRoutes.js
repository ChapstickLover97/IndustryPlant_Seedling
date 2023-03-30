const app = require('express').Router();

app.get('/', (req, res) => {
    res.render('landingpage', {
  
    })
  })
  
   app.get('/search', (req, res) => {
      res.render('search', {
  
      })
   })
  
   app.get('/post-review', (req, res) => {
    res.render('post-review', {
  
    })
   })
   
  
   app.get('/artist-list', () => {
    res.render('artist-list', {
      
    })  
   })
  
    
   app.post('/signup', (req, res) => {
   })

   app.post('/login', (req, res) => {
   })

   // post.get('/search', () => {
    
   // })
   
   // post.get('/music-review', () => {
    
   // })

   module.exports = app;
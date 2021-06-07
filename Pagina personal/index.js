const express = require('express');
const app = express();


app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/public'));
app.use(express.static(__dirname + '/views/public/javascripts'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home')
});
app.get('/test', (req, res) => {
  res.render('testhome')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
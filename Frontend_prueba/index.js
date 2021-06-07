const express = require("express");

const app = express();
//const port = 3000;
const port = process.env.PORT || 80
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/views'));


app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home')
});

app.use(express.urlencoded({
    extended: true
}));

app.post('/movie', (req, res) =>{
    //console.log({ name: req.body.titleMovie }.name)
    res.redirect('/movie/' + {name: req.body.titleMovie}.name)
});

app.get('/movie/:title', (req, res) =>{
    const title = req.params;
    res.render('movie', title);
});

app.post('*', (req, res) =>{
    //console.log({ name: req.body.titleMovie }.name)
    res.redirect('home')
});
app.get('*', (req, res) =>{
    //console.log({ name: req.body.titleMovie }.name)
    res.redirect('home')
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

//app.listen(port, () =>{
 //   console.log(`Example app listening at http://localhost:${port}`);
//});
const express = require('express');
const logger = require('morgan');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

const routes = require('./routes/routeConfig');
app.use('/quiz', routes);

app.use(logger('dev'));


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res){
    res.redirect('/quiz');
})

app.use('*', function(req, res) {
	res.status(400).render('error.ejs');
})


app.listen(PORT, () => {
  console.log(PORT + ', yall');
});
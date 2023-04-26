const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

const indexRouter = require('./routes/index');
const usersRouter =  require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Rodando');
});
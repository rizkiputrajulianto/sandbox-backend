var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const routes = require("./src/routes/index");
const {Sequelize, sequelize} = require("./src/models");

// sequelize.sync();
// buat sinkronisasi biasa
// sequelize.sync({force: true});
// buat maksain sinkronisasi

/*
tinggal bikin tabel trus bikin controller setelah itu pindahin folder routes ke src
hapus file routes yang user

trus daftarin routesnya ke sini pake const router = require("./src/routes");
diatas require sequelize

trus hapus router yang index sama user
trus pake app.use(router);
dibawah express static
*/ 


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

module.exports = app;

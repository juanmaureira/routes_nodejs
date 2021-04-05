const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { router } = require('./router/router');

const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);


module.exports = {
    app
}
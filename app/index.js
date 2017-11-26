const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const morgan = require('morgan');

const logger = require('./logger');

const app = express();
app.use(morgan('dev'));

app.use('/admin/status', (req, res) => res.status(200).send('Ok'));

logger.info(`Server starting at ${config.PORT}`);
app.listen(config.PORT);

module.exports = app;

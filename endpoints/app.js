const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 4100;

// settings
app.set('port', port);

// middlewares
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use('/questions', routes);

app.listen(app.get('port'), () => {
    console.log(`App running on ${port}`);
});

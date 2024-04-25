var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');
const { isProduction } = require('./config/keys');
const csurf = require('csurf');
const debug = require('debug');

require('./models/User');
require('./models/Itinerary');
require('./models/Event');
require('./models/Living');
require('./models/Transportation');
require('./models/Like')
require('./config/passport');
const passport = require('passport');

var usersRouter = require('./routes/api/users');
const csrfRouter = require('./routes/api/csrf');
const itineraryRouter = require('./routes/api/itinerary')
const likeRouter = require('./routes/api/like')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());

if (!isProduction) {
    app.use(cors());
}

app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
);

app.use('/api/users', usersRouter);
app.use('/api/csrf', csrfRouter);
app.use('/api/itinerary', itineraryRouter)
app.use('/api/likes', likeRouter)

if (isProduction) {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  app.get('/', (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'dist', 'index.html')
    );
  });

  // Serve the static assets in the frontend's dist folder
  app.use(express.static(path.resolve("../frontend/dist")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  app.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'dist', 'index.html')
    );
  });
}

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
  });

  const serverErrorLogger = debug('backend:error');

  app.use((err, req, res, next) => {
    serverErrorLogger(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      statusCode,
      errors: err.errors
    })
  });
module.exports = app;

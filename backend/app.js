const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const {environment} = require('./config')
const routes = require('./routes')

const isProduction = environment ==='production'
const {ValidationError} = require('sequelize')
const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

if(!isProduction) {
  app.use(cors());
}
app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "lax",
      httpOnly: true
    }
  })
)
app.use(routes)
//standard 404 error handler
app.use((_req, _res, next) => {
  const err = new Error ("The requested resource could not be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource could not be found."];
  err.status = 404;
  next(err);
})
//Processing the sequelize errors
app.use((err, _req, _res, next) => {
  //check if error is actually a sequelize error:
    if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
})
//error formatter handler
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
const express        = require('express')
const mysql          = require('mysql')
const bodyParser     = require('body-parser')
const cors           = require('cors')
const app            = express()

const port = 8000

// app.use(cors());
// app.options('*', cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//This is used to parse the requests sent to the API
app.use(bodyParser.urlencoded({ extended: true }))


require('./app/routes')(app, {})

app.listen(port, () => {
  console.log('We are live on ' + port)
});
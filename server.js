const express = require('express');
const gmail = require('./server/routes/api/send');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();

// Bodyparser Middleware
//app.use('/uploads', express.static('uploads'));
app.use(require("body-parser").text());
app.use(bodyParser.json());
app.use(cors())

// DB Config

// Connect to Mongo


  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

  // Use Routes
  app.use('/api/send', gmail);



// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));
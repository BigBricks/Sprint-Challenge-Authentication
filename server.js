const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');;
const cors = require('cors');

const routes = require('./api/routes/routes');

mongoose
  .connect('mongodb://localhost/sprauthdb')
  .then(conn => {
    console.log('\n connected to mongo \n');
  })
  .catch(err => console.log('error connecting to mongo', err));

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
};

server.use(bodyParser.json());
server.use(cors());

routes(server);
server.listen(5000, () => console.log('\n api running on 5k \n'));

module.exports = {
  server
};

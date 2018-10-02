const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://alexbryant23:Raiders23#@ds121373.mlab.com:21373/gtdb', {
  useNewUrlParser: true
});

// const URI = process.env.MONGODB_URI || "mongodb://localhost/List";
// mongoose.connect(URI, { useNewURIParser: true}).catch(function (err) {console.log(err)});
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, function () {
  console.log(`App is now listening on PORT ${PORT}`)
})
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const users = require('./routes/api/user');
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

app.use("/api/user", users);
//DB config
//const db = require('./config/keys').mongoURI;
// connect to mongoDB
mongoose
  .connect("mongodb://localhost/layover", {
    useMongoClient: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//route to home
app.get('/', (req, res) => res.send('Hello Mongo'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
// Set up promises with mongoose
//mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//mongoose.connect(
//  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//  {
//    useMongoClient: true
//  }
//);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const routes = require("./routes");
const app = express();

mongoose.connect("mongodb://localhost:27017/bookworm");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

app.use(
  session({
    secret: "hello world",
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db })
  })
);
app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId;
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

app.listen(5000, _ => console.log("Express App listening on port 5000"));

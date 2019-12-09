//Import an express package and execute
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var multer = require("multer");
const session = require("express-session");
// const ejs =require('ejs')

//Mongoose helps us to easily connect to our mongodb database

//Pug is a view engine that helps us view pug files in a browser
//sets the path for the pug files

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");

//Store all JS and CSS in Scripts folder.

//Middleware is a ftn that executes when a certain route is hit
//Middleware captures data and transforms it into a json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// app.use(express.static(path.join(__dirname, 'public')))

//add the router
app.use(express.static(__dirname + "/views"));
//Store all HTML files in view folder.
app.use(express.static(__dirname + "/Script"));

//Middlrware for sessions
app.use(
  session({
    secret: "resave",
    resave: true,
    saveUninitialized: false
  })
);

//Import routes and Create a middleware
//Make bookings
const bookingRoute = require("./Routes/bookingRoute");
app.use("/booking", bookingRoute);
//Register Supervisor
const supLogsRoute = require("./Routes/regSupervisor");
app.use("/regSuperv", supLogsRoute);
//Supervisor login
const logSupvRoute = require("./Routes/logSupvRoute");
app.use("/authSupervisor", logSupvRoute);
//Register customer
const regCustomer = require("./Routes/registerCustomerRoute");
app.use("/registerCustomer", regCustomer);
//Make appointments
const booking = require("./Routes/bookingRoute");
app.use("/bookingClub", booking);

//Fetch Seaters and Appointments
const seaters = require("./Routes/assignSeaters");
app.use("/assign", seaters);

//Post Seaters and Appointments
const postAssignmnet = require("./Routes/postAssignments");
app.use("/assignSeater", postAssignmnet);

//All Reports Page
const reportsPage = require("./Routes/reports");
app.use("/reports", reportsPage);

//Register Seaters
const addSeaters = require("./Routes/regSeaterRoute");
app.use("/resgisterSeater", addSeaters);

const postsRoute = require("./Routes/posts");
app.use("/form", postsRoute);

const loginRoute = require("./Routes/login");
app.use("/auth", loginRoute);

const seaterLogsRoute = require("./Routes/regSeaterRoute");
app.use("/registerSeater", seaterLogsRoute);

//Mongoose helps to save data to the database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/jbc", () => {
  console.log("Connected to the database");
});

const newfilesRoute = require("./Routes/newfiles");
app.use("/uploadFile", newfilesRoute);
app.use("/uploadMultiple", newfilesRoute);

//Set the server to listen to some port.
app.listen(5000, () => {
  console.log("Listening on port 5000");
});

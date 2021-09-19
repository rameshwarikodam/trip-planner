const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./src/models");

//db.sequelize.sync();


const run = async () => {

};

// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     run();
// });


//midleware
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//define root route
app.get('/', (request, response) => {
    response.send("hello");
})

// //import trip routes
// const tripRoutes = require('./src/routes/trip.route');

// //create trip routes
// app.use('api/v1/trip', tripRoutes);

// routes
require('./src/routes/auth.routes')(app);
require('./src/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listing at port ${PORT}`);
});
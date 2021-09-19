// const mysql = require('mysql');

// const dbConn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'trip',
//     // pool: {
//     //     max: 5,
//     //     min: 0,
//     //     acquire: 30000,
//     //     idle: 10000
//     // }
// });

// dbConn.connect(function (error) {
//     if (error) throw error;
//     console.log("Database Connected Successfully!!");
// });

// module.exports = dbConn;

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Firstcry@123",
    DB: "trip",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
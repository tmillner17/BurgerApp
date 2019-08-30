var mysql = require("mysql")

// var connection = mysql.createConnection ({
//     host: "cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "sk7y4o4ble1x59rp",
//     password: "ww1uxnsvmn6zrea9",
//     database: "lyk1ufig1r8xtgso"
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};

connection.connect (function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;
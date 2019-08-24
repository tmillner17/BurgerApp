var mysql = require("mysql")

var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysqlcreateConnection(process.env.JAWSDB_URL);
} else {
    connection = mysqlcreateConnection({
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
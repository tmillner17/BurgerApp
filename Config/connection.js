var mysql = require("mysql")

var connection = mysql.createConnection ({
    host: "ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "gko34zzfwy52avyv",
    password: "cr5yvjghytjkwgdu",
    database: "`kk0s6y3x9gw4rwoa`"
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
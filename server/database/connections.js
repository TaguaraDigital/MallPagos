const mysql = require('mysql');

mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'portalpagos'
});

module.exports = mysql;
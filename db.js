let mysql = require('mysql');
let fs = require('fs');

let config = JSON.parse( 
    fs.readFileSync( __dirname + "/config/" + "db.json", 'utf8')
);

let connection = mysql.createConnection(config);

exports.connection = connection.connect();

exports.query = (function(str, ...params){
    return new Promise(function(resolve, reject) {
        connection.query(str, params, function (err, rows, fields) {
        if (err) throw err
            resolve(rows);
        })
    })
});
let mysql = require('mysql');
let fs = require('fs');


let db = (function(){
    
    let config = JSON.parse( 
        fs.readFileSync( __dirname + "/config/" + "db.json", 'utf8')
    );
    
    this.connection = mysql.createConnection(config);

    this.connection.connect();

    this.query = function(str, ...params){
        return new Promise(function(resolve, reject) {
            this.connection.query(str, params, function (err, rows, fields) {
                if (err) throw err
                resolve(rows);
            })
        });
    }

    return this;
})();

exports.connection = db.connection;
exports.query      = db.query;
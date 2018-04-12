let mysql = require('mysql');

exports.db = (function(){
    this.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'laratest'
    });

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
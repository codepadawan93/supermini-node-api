let express = require('express');
let app     = express();
let db      = require('./db.js') ;

app.get('/users/:id', function (req, res) {
    const sql = "SELECT * FROM users WHERE id = ?";
    let results = db.query(sql, escape(req.params.id));
    results.then(r => res.end( JSON.stringify(r) ));
 })

app.get('/users', function (req, res) {
    const sql = "SELECT * FROM users";
    let results = db.query(sql);
    results.then(r => res.end( JSON.stringify(r) ));
})

let server = app.listen(8081, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
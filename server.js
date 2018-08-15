let express = require('express');
let db      = require('./db');
let helper  = require('./helper');

let app     = express();

app.get('/users/:id', function (req, res) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    let results = db.query(sql, parseInt(req.params.id));
    results.then(r => helper.json(res, r));
});

app.get('/users', function (req, res) {
    const sql = 'SELECT * FROM users';
    let results = db.query(sql);
    results.then(r => helper.json(res, r));
});

app.get('/users/:limit/:offset', function (req, res) {
    const sql = 'SELECT * FROM users LIMIT ? OFFSET ?';
    let results = db.query(sql, parseInt(req.params.limit), parseInt(req.params.offset));
    results.then(r => helper.json(res, r));
});

app.get('/posts/:id', function (req, res) {
    const sql = 'SELECT * FROM posts WHERE id = ?';
    let results = db.query( sql , parseInt(req.params.id));
    results.then(r => helper.json(res, r));
});

app.get('/posts', function (req, res) {
    const sql = 'SELECT * FROM posts';
    let results = db.query( sql );
    results.then(r => helper.json(res, r));
});

let server = app.listen(8081, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
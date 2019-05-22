# supermini-node-api
Ultra small REST api built on Express

# How to use the DB library
```js
// Write the parameterized query (substitute values with ?)
const sql = 'SELECT * FROM users WHERE id = ?';

// the .query method returns a promise
db.query(sql, parseInt(id))
    .then(res => console.log(res)); // access the results

// you could also use async await to achieve the same results
const doStuff = async id => {
    const results = await db.query("SELECT * FROM users WHERE id = ?", parseInt(id));
    console.log(results);
}

// pass as many params as needed
let results = db.query('SELECT * FROM users LIMIT ? OFFSET ?', parseInt(limit), parseInt(offset));
```

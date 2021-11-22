const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '01664464657',
    database: 'pos',
});

connection.connect((errors, connection) => {
    if (errors) {
        console.log.error('connection database errors... ' + errors.stack);
        return;
    }
    else {
        console.log('connection database sucessful...');
    }
})

module.exports = connection;
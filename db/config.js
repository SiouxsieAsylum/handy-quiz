const options = {
  query: (e) => {
    console.log(e.query);
  }
}

const pg = require('pg-promise')(options);

function setDatabase() {
    return pg({
      database: 'handyquiz',
      port: 5432,
      host: 'localhost',
    })
}

const db = setDatabase();

module.exports = db;
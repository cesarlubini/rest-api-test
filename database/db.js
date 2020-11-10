const Database = require('sqlite-async');

function execute(db) {
  return db.exec(`
    CREATE TABLE IF NOT EXISTS Cadastros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age TEXT,
      gender TEXT,
      smoke BOOLEAN,
      drink BOOLEAN
    );
  `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);
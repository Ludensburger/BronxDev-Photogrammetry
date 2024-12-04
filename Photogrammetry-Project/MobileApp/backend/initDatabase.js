const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.error('Error creating users table:', err.message);
    } else {
      console.log('Users table created successfully.');
    }
  });
});

db.close((err) => {
  if (err) {
    console.error('Error closing the database connection:', err.message);
  } else {
    console.log('Database connection closed.');
  }
});
const db = require('../models/database');

exports.getAllUsers = (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

exports.addUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ error: 'All fields are required' });
    return;
  }

  console.log(`Attempting to add user: ${name}, ${email}, ${password}`); 

  db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], function (err) {
    if (err) {
      console.error('Error adding user:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    console.log('User added successfully with ID:', this.lastID);
    res.status(201).json({ id: this.lastID });
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  console.log(`Attempting to login user: ${email}`);

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      console.error('Error logging in user:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      console.log('Login successful for user:', email);
      console.log('Retrieved user:', row);
      res.json({ message: 'Login successful', user: row });
    } else {
      console.log('Login failed for user:', email);
      res.status(404).json({ error: 'User not found' });
    }
  });
}
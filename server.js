const express = require('express');

const fs = require('fs');
const app = express();
const port = 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

const usersFilePath = './src/data/users.json';

app.post('/register', (req, res) => {
  const { email, password, username } = req.body;

  // Load the existing users from the JSON file
  let existingUsers = [];
  try {
    existingUsers = JSON.parse(fs.readFileSync(usersFilePath));
  } catch (error) {
    console.error('Failed to read users JSON file:', error);
    res.status(500).json({ error: 'Failed to read users JSON file' });
    return;
  }

  // Check if the email already exists
  const emailExists = existingUsers.some((user) => user.email === email);

  if (emailExists) {
    res.json({ message: 'Email already exists. Please use a unique email.' });
  } else {
    // Add the new user to the JSON file
    const newUser = { email, password, username };
    existingUsers.push(newUser);

    try {
      fs.writeFileSync(usersFilePath, JSON.stringify(existingUsers, null, 2));
      res.json({ message: 'Successfully registered' });
    } catch (error) {
      console.error('Failed to write users JSON file:', error);
      res.status(500).json({ error: 'Failed to write users JSON file' });
    }
  }
});

app.post('/api/login', (req, res) => {
  console.log('Entered Login')
  const { email, password } = req.body;

  // Read the users data from the JSON file
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

  // Find the user with the matching email and password
  const user = usersData.find((user) => user.email === email && user.password === password);

  if (user) {
    // Return success message or user data
    res.json({ message: 'Login successful', user: user});
  } else {
    // Return error message for failed login
    res.status(401).json({ message: 'Invalid credentials, please try again' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

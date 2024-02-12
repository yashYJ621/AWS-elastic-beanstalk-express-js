const express = require('express');
const app = express();
const port = 8080;

// Set up routes for different blog posts
app.get('/', (req, res) => {
  res.send('Welcome to the Data Blog!');
});

app.get('/post1', (req, res) => {
  res.send('This is the first post about data analysis.');
});

app.get('/post2', (req, res) => {
  res.send('This is the second post about machine learning techniques.');
});

app.get('/post3', (req, res) => {
  res.send('This is the third post about data visualization.');
});

// Set up a catch-all route for other URLs
app.get('*', (req, res) => {
  res.send('Page not found.');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

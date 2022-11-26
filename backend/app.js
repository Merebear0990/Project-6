// MongoDB Connection: mongodb+srv://merebear0990:<password>@cluster0.g33pgsf.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

const userSchema = require('./models/user');
const app = express();

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g33pgsf.mongodb.net/?retryWrites=true&w=majority
`
mongoose.connect(connectionString)
  .then(() => {
    console.log('Successfully connectedto MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connectto MongoDB Atlas!');
    console.error(error);
  });

app.use(express.json());
app.use(cors());

//setting headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/auth', userRoutes)
app.use('/api/sauces', sauceRoutes);

module.exports = app;
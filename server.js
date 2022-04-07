require('dotenv').config({path: './config.env'});
const express = require('express');
const helmet = require('helmet');
const connectDB = require('./config/db');


const app = express();
const auth = require('./routes/auth');
connectDB;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', auth);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
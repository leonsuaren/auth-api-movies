require('dotenv').config({path: './config.env'});
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');


const app = express();
const auth = require('./routes/auth');
const private = require('./routes/private');
connectDB();

app.use(helmet());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', auth);
app.use('/api/private', private);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
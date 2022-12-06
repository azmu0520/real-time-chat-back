const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const cors = require('cors');
const notFound = require('./middlewares/404');
const errorHandler = require('./middlewares/error-handler');
require('dotenv').config();
//
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);
app.use(cors());

const connect = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log('hello'));
  } catch (error) {
    console.log(error);
  }
};

connect();

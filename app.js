const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB =  require('./db/connect')
require('dotenv').config()
app.use(express.json());
app.get('/hello', (req, res) => {
  res.send('Task App');
});
app.use('/api/v1/tasks', tasks);
const port = 3000;

const connect = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('hello'));
    } catch (error) {
       console.log(error); 
    }
}

connect()


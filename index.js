const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoute);

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_DB;

app.listen(port, (req, res) => {
  console.log(`Server running on port....: ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("Connection Failed", err?.message));

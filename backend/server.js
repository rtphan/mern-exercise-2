const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGOOSE_URI;
console.log(uri);

mongoose.connect(uri, {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
})
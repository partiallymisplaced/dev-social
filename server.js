const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB config 
const db = require('./env').mongoURI;

// Connect to mongoDB (mLab)
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Our first route
app.get('/', (req, res) => res.send('Hello World'));

const port = 9000;

app.listen(port, () => console.log(`Server running on port:${port}`));
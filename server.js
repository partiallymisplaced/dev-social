const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config 
const db = require('./env').mongoURI;

// Connect to mongoDB (mLab)
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Our first route
app.get('/', (req, res) => res.send('Hello World'));

// Mounts middleware functions
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 9000;
app.listen(port, () => console.log(`Server running on port:${port}`));
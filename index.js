const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// import routes
const authRoute = require('./routes/auth');
const accountRoute = require('./routes/account');

dotenv.config();


// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('connected to DB');
    });


// middleware    
app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/account', accountRoute);

app.listen(3000, () => {
    console.log('Server up and running');
})
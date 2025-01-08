const express = require('express');
const mongoose = require('mongoose');

const app = express();

const { cars } = require('./car');
const { first } = require('lodash');

const data = require('./data.json');

app.use(express.static('./public'));
// app.use(express.urlencoded());
app.use(express.json());

//Db Connection
const connectDb = async () => {
    try
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/car');
        console.log('Database connected');
    }
    catch(err)
    {
        console.error('Connected to database failed');
    }
}

//Schema
const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String
    },
    email : {
        type : String,
        required : true
    }
})

const User = mongoose.model('user', userSchema);



app.get('/', (req, res) => {
    // res.status(200).send('<a href="/api/people">Click this</a>');
})

app.get('/api/people', (req, res) => {
    const name = req.query;

    while(!name)
    {
        res.status(400).send('An error occurred');
    }
    res.status(200).send({status : true, name : cars});
})

app.post('/login', async (req, res) => {
    const body = req.body;
    if(!body || !body.firstname || !body.lastname || !body.email)
    {
        return res.status(400).json({ msg : "All fields are required"});
    }

    const result = await User.create({
        firstname : body.firstname,
        lastname : body.lastname,
        email : body.email
    })

    console.log(result);
    res.status(200).send({ status : true });
})

connectDb().then(() => {
    app.listen(1000, () => {
        console.log('Server is listening on the port 1000');
    })
})
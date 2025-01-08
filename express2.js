const express = require('express');
const mongoose = require('mongoose');

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

const dbConnect = async () => {
    
    try
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/student');
        console.log('Database Connected successfully');
    }
    catch
    {
        console.error('An error ocurred');
    }
}

const userSchema = new mongoose.Schema({
    name : {
        type : "String",
        required : true
    },
    email : {
        type : "String",
        required : true
    }
})

const User = mongoose.model('student', userSchema);

app.get('/', (req, res) => {
    res.status(200).send('success');
})

app.get('/students', async (req, res) => {
    try
    {
        const student = await User.find();
        console.log(student);
        res.status(201).json(student);
    }
    catch(err)
    {
        res.status(400).send('An error ocurred');
        console.log('An error ocurred');
    }
})

app.post('/students', async (req, res) => {
    try
    {
        const { name , email } = req.body;
        const result = await User.create({
        name : name,
        email : email
        })
        
        console.log(result);
        res.status(202).send('success');
    }
    catch(err)
    {
        console.log('An error ocurred');
        res.status(401).send('An error ocurred');
    }
})

dbConnect().then(() => {app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}`);
}) 
}
)
const express = require('express');
const mongoose = require('mongoose');

const PORT = 8000;

const app = express();

app.use(express.json);
app.use(express.urlencoded);

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
    console.log(res.status(200).send('success'));
})

app.get('/students', (req, res) => {
    console.log(res.status(200).send('success'));
})

app.post('/student', (req, res) => {
    const { name , email } = req.body;
    const result = User.create({
        name : name,
        email : email
    })

    console.log(result);
})

dbConnect().then(() => {app.listen(PORT, () => {
    console.log(`Server is listeming on the port ${PORT}`);
}) 
}
)
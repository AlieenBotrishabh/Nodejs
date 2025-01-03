const express = require('express');
const { people } = require('./data');

const app = express();

app.use(express.static('./methods'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).send({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide a name value' });
    }
    res.status(201).send({ success: true, person: name });
});

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'please provide the name value' });
    }
    res.status(201).send({ success: true, data: [...people, name] });
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    const newPeople = people.map((person) => {
        if(person.id === Number(id))
        {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success : true, data : newPeople})
});

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person)
    {
        return res.status(404).json({ success : false, msg : `person with id ${req.params.id}`});
    }
})

app.listen(5000, () => {
    console.log('Server is listening on the port 5000');
});

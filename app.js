const express = require('express');
const app = express();

const PORT = 4000;

app.use(express.json());

const books = [
    {
        id : '1',
        name : 'C++',
        author : 'ABC'
    },
    {
        id : '2',
        name : 'Python',
        author : 'XYZ'
    }
]

app.get('/', (req, res) => {
    res.status(200).json({ msg : 'Welcome to the bookstore'});
})

app.get('/get', (req, res) => {
    res.status(201).json(books);
})

app.get('/get/:id', (req, res) => {
    const book = books.find(item => item.id === req.params.id);
    if(!book)
    {
        res.status(400).json({msg : 'An error occurred'});
    }
    else
    {
        res.status(202).json(book);
    }
})

app.post('/add', (req, res) => {
    const newBook = {
        id : books.length + 1,
        title : `Book ${books.length + 1}`
    }
    books.push(newBook);
    res.status(203).json({
        data : newBook,
        msg : 'Book added successfully'
    });
})

app.put('/update/:id', (req, res) => {
    const book = books.find(bookItem => bookItem.id === req.params.id);
    if(!book)
    {
        res.status(404).json({msg : 'An error occurred'});
    }
    else
    {
        const { name, author } = req.body;
        book.name = name || book.name;
        book.author = author || book.author;
        res.status(200).json({
            data : book,
            msg : `Book with ID ${req.params.id} updated successfully`
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}`);
})
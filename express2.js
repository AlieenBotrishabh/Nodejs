const express = require('express');
const path = require('path');

const app = express();
const { products } = require('./data');

// setup app and milddleware
// app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products/1">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProducts);
})
app.get('/api/products/:productID', (req, res) => {
    console.log(req);
    console.log(req.params);
    const { productID } = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID));
    res.json(singleProduct);

    if(!singleProduct)
    {
        return res.status(404).send("Product does not exists");
    }
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send("Hello World");
}
)

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProdcuts = [...products];


    if(search)
    {
        sortedProdcuts = sortedProdcuts.filter((products) => {
            return products.name.startsWith(search);
        })
    }

    if(limit)
    {
        sortedProdcuts = sortedProdcuts.slice(0, Number(limit))
    }
    if(sortedProdcuts.length < 1)
    {
        return res.status(200).json({ success: true,data: []});
    }
    res.status(200).json(sortedProdcuts);
    // res.send("Hello World");
})

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'));
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './styles.css'));
// })
app.get('/about', (req, res) => {
    res.status(200).send("About Page");
})
app.all('*', (req, res) => {
    res.status(404).send("<h1>resource not found<h1>");
})
app.listen(5001, () => {
    console.log("Server is listening on the port number 5001");
})


//app.get
//app.post
//app.put
//app.delete
//app.all
//all.use
//app.listen
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

const main = async () => {
    try {
        await client.connect();
        const db = client.db('shopkeeper');
        const collection = db.collection('products');
        const data = await collection.find({ price: { $gt: 1200 } }).toArray();
        console.log(data);
        return "done";
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

main()
    .then(console.log)
    .catch((e) => console.log(e));

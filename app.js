const express = require('express')
const app = express()

const port = 3000

app.set('view engine', 'ejs') // ini cara untuk menggunakan EJS, (ditaruh di folder views)
app.use(express.static('public')) // ni biar bisa ngakses img, css, dll di folder public (defaultnya gabisa)

app.get('/', (req, res) => {
    res.render('index', {// res.render('index') <=> "cari file index.ejs di folder views lalu tampilkan"
        passedVariable: "testestes",
        passedName: "Muhammad Azka Adhisetama" // properti objek yg di pass dapat lgsg diakses di file EJS
                                               // tujuan. cth: <%= passedName %> di index.ejs akan merender
                                               // Muhammad Azka Adhisetama
    }) 
})

app.get('/json/:id/blin/:name', (req, res) => {
    // :something maksudnya apapun yg dimasukkan disitu, akan diambil ke req.params.something
    res.json({
        caonima: "afssaf",
        aaaiaaa: "lorem ipsum",
        id: req.params.id,
        name: req.params.name
    })
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})



// sum' note: ada npm bernama "validate" yg sangat usefullll

// untuk mongodb, lihat dokumentasi disini https://www.mongodb.com/docs/v6.0/reference/method/js-collection/

// how to mongodb

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@testmongo.rbvgcyd.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
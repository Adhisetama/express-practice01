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



// how to mongodb

// buat akun atlas trs buat username & password
// trs klik connect ke app node.js n copy the code

// how to use: (doc in https://www.npmjs.com/package/mongodb)

// // 1. install MongoDB "npm install mongodb" and require
//     const { MongoClient, ServerApiVersion } = require('mongodb');
//     const uri = "mongodb+srv://admin:admin@testmongo.rbvgcyd.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, {
//         useNewUrlParser: true, useUnifiedTopology: true,
//         serverApi: ServerApiVersion.v1
//     });

// // 2. define url and client
//     const url = 'mongodb://127.0.0.1:27017'
//     const dbName = 'TestMongo'

// // 3. make da client
// client.connect(error => {
//     if(error) {
//         return console.log("connection failed")
//     }
//     console.log("DB connected")
//     const db = client.db(dbName); // db merepresentasikan database

//   // ============ OPERATION WITH ZE DB ============ 
//   // just see https://www.mongodb.com/docs/v6.0/reference/method/js-collection/

//     db.collection("contact").insertOne({
//         name: "Azka Adhisetama",
//         phone: "081225805559",
//         country: "Indonesia"
//     })

// //   client.close(); // mengakhiri koneksi dgn db
// });



// trying mongoose
// const mongoose = require('mongoose')

// // 1. connect to mongoDB
// const uri = "mongodb+srv://admin:admin@testmongo.rbvgcyd.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// // 2. adding a model (schema)
// const Contact = mongoose.model('contact', {
//     name: { type: String },
//     phone: { type: String },
//     country: { type: String }
// })

// // example: insert model to db

// const test = new Contact({
//     name: 'Arsyad Sukma',
//     phone: "081222222222",
//     country: "Singapore"
// })

// test.save() // save ke test.contact

// ^^ SEMUANYA DI REQUIRE DARI TEMPAT LAEN
require('./utils/db')
const Contact = require('./model/contact')
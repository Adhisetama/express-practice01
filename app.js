const express = require('express')
const app = express()
const port = 1234

// ejs configuration
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))

// connection to mongodb
require('./utils/db')
const Contact = require('./model/contact')


// index page
app.get('/', async (req, res) => {
    const contact = await Contact.find() // fetch from database
    res.render('index', {
        contact
    })
})

// add contact page
app.get('/add', async (req, res) => {
    res.render('add-contact')
})
app.post('/add', async (req, res) => {
    await Contact.insertMany(req.body, (err, res) => {})
    res.redirect('/')
})

// delete contact logic
const { ObjectId } = require('mongodb')
app.get('/delete/:id', async (req, res) => {
    const contact = await Contact.findOne({_id: ObjectId(req.params.id)})
    if (contact) {
        await Contact.deleteOne({_id: contact._id}) // hapus dari database
        res.redirect('/')
    } else {
        res.status(404)
        res.send('<h1>Error 404: Not Found</h1>')
    }
})

// edit contact page
app.get('/edit/:id', async (req, res) => {
    const contact = await Contact.findOne({_id: ObjectId(req.params.id)})
    if (contact) {
        res.render('edit-contact', { contact })
    } else {
        res.status(404)
        res.send('<h1>Error 404: Not Found</h1>')
    }
})
app.post('/edit', async (req, res) => {
    const contact = await Contact.findOne({_id: ObjectId(req.body._id)})
    if (contact) {
        await Contact.updateOne(
            {_id: ObjectId(req.body._id)},
            {
                $set: {
                    name: req.body.name,
                    phone: req.body.phone,
                    country: req.body.country
                }
            }
        )
        res.redirect('/')
    } else {
        res.status(404)
        res.send('<h1>Error 404: Not Found</h1>')
    }
})

app.listen(port, () => {
    console.log('listening to port ' + port)
})
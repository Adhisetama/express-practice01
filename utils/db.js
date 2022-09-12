const mongoose = require('mongoose')

const uri = "mongodb+srv://admin:admin@testmongo.rbvgcyd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
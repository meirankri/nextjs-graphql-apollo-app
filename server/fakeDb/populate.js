const mongoose =  require('mongoose')
const config = require('../config/dev')

const fakeDb = require('./fakeDb')

//exports.connect = () =>{
  mongoose.connect(config.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

  }, async () =>{
    console.log('stating populating db ...')
    await fakeDb.populate();
    await mongoose.connection.close();

    console.log('db as been populate');

  })
//}

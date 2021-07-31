const mongoose = require('mongoose');


mongoose.connect( process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

})

const db = mongoose.connection;

db.once(
    'connected',
    function() {
        console.log(`Connected to Mongo ${db.name} at ${db.port}`)
    }
)
const mongoose = require('mongoose')

// test
const url = "mongodb://test:test@cluster0-shard-00-00.mlsx3.mongodb.net:27017,cluster0-shard-00-01.mlsx3.mongodb.net:27017,cluster0-shard-00-02.mlsx3.mongodb.net:27017/note-app?ssl=true&replicaSet=atlas-9igbcr-shard-0&authSource=admin&retryWrites=true&w=majority"
console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)
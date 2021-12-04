const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
   id: {
      type: Number,
   },
   status: {
      type: Boolean,
      default: true,
   },
   timeStamp: {
      type: Number
   },
   channelId: {
      type: String,
   },
   userId: String,
   username: String,
   messages: {
      type: Array,
      default: []
   },
   files: {
      type: Array,
      default: []
   }
})

module.exports = mongoose.model('Tiket', Schema)
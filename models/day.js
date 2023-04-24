import mongoose from 'mongoose'

const Schema = mongoose.Schema

const daySchema = new Schema({
  pain: Number,
  mood: String,
  flow: String
}, {
  timestamps: true
})

const Day = mongoose.model('Day', daySchema)

export {
  Day
}
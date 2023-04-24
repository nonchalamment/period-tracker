import mongoose from 'mongoose'

const Schema = mongoose.Schema

const daySchema = new Schema({
  pain: Number,
  mood: String,
  flow: String
}, {
  timestamps: true
})

const periodSchema = new Schema({
  startDate: {
    type: Date,
    default: () => new Date()
  }, 
  endDate: {
    type: Date,
    default: () => {
      return new Date(+new Date() + 7*24*60*60*1000)
  }},
  profile: {type: Schema.Types.ObjectId, ref: 'Profile' },
  day: [daySchema]
}, {
  timestamps: true
})

const Period = mongoose.model('Period', periodSchema)

export {
  Period
}
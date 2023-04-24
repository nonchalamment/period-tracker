import mongoose from 'mongoose'

const Schema = mongoose.Schema

const periodSchema = new Schema({
  startDate: Date,
  endDate: Date,
  profile: {type: Schema.Types.ObjectId, ref: 'Profile' },
  day: [daySchema]
}, {
  timestamps: true
})

const Period = mongoose.model('Period', periodSchema)

export {
  Period
}
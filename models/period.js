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
  startDate: {type: Date, default: function() {
    const d = new Date().getTime();
    return d;
  }},
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
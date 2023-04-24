import { Period } from '../models/period.js'

function index(req, res) {
  Period.find({})
  .then(periods => {
    res.render('periods/index', {
      periods: periods,
      title: "PERIODS!"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newPeriod(req, res) {

}

export {
  index,
  newPeriod as new,
}
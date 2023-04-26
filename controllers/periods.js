import { Period } from '../models/period.js'

function index(req, res) {
  Period.find({ profile: req.user.profile._id })
  .then(periods => {
    res.render('periods/index', {
      periods: periods,
      title: "View Periods"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newPeriod(req, res) {
  res.render('periods/new', {
    title: 'Add Period'
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  req.body.profile = req.user.profile._id
  Period.create(req.body)
  .then(period => {
    res.redirect('/periods')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/periods')
  })
}

function deletePeriod(req, res) {
  Period.findByIdAndDelete(req.params.periodId)
  .then(period => {
    res.redirect('/periods')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/periods')
  })
}

function show(req, res) {
  // Period.find({ _id: req.params.periodId, author: req.user.profile._id })
  Period.findById(req.params.periodId)
  .then(period => {
    res.render('periods/show', {
      title: 'Details about Period',
      period: period,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Period.findById(req.params.periodId)
  .then(period => {
    res.render('periods/edit', {
      period: period,
      title: 'Edit Period'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Period.findByIdAndUpdate(req.params.periodId, req.body, {new: true})
  .then(period => {
    res.redirect(`/periods/${period._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createDay(req, res) {
  Period.findById(req.params.periodId)
  .then (period => {
    period.days.push(req.body)
    period.save()
    .then(() => {
      res.redirect(`/periods/${period._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function editDay(req, res) {
  Period.findById(req.params.periodId)
  .then(period => {
    const day = period.days.id(req.params.dayId)
    res.render('periods/editDay', {
      period: period,
      day: day,
      title: 'Update Day'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/periods')
  })
}

function updateDay(req, res) {
  Period.findById(req.params.periodId)
  .then(period => {
    const day = period.days.id(req.params.dayId)
    day.set(req.body)
    period.save()
    .then(() => {
      res.redirect(`/periods/${period._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/periods')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/periods')
  })
}

function deleteDay(req, res) {
  Period.findById(req.params.periodId)
  .then(period => {
    const day = period.days.id(req.params.dayId)
    period.days.remove(day)
    period.save()
    .then(() => {
      res.redirect(`/periods/${period._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/periods')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/periods')
  })
}

export {
  index,
  newPeriod as new,
  create,
  deletePeriod as delete,
  show,
  edit,
  update,
  createDay,
  editDay,
  updateDay,
  deleteDay,
}
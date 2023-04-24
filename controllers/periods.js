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
  res.render('periods/new', {
    title: 'Add Period'
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  console.log(req.body, "this is req.body!")
  Period.create(req.body)
  .then(period => {
    console.log(period, "this is period!")
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

export {
  index,
  newPeriod as new,
  create,
  deletePeriod as delete,
  show,
  edit,
  update,
}
import { Router } from 'express'
import * as periodsCtrl from '../controllers/periods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/periods
router.get('/', periodsCtrl.index)
// GET localhost:3000/periods/new
router.get('/new', isLoggedIn, periodsCtrl.new)
// POST localhost:3000/periods/new
router.post('/', periodsCtrl.create)
// DELETE localhost:3000/periods/:periodId
router.delete('/:periodId', periodsCtrl.delete)
// GET localhost:3000/periods/:periodId
router.get('/:periodId', periodsCtrl.show)
// GET localhost:3000/periods/:periodId/edit
router.get('/:periodId/edit', periodsCtrl.edit)
// localhost:3000/periods/:periodId
router.put('/:periodId', periodsCtrl.update)
// POST localhost:3000/periods/:periodId/days
router.post('/:periodId/days', periodsCtrl.createDay)

export {
  router
}
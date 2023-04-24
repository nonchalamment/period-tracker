import { Router } from 'express'
import * as periodsCtrl from '../controllers/periods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/periods
router.get('/', isLoggedIn, periodsCtrl.index)
// GET localhost:3000/periods/new
router.get('/new', isLoggedIn, periodsCtrl.new)
// POST localhost:3000/periods/new
router.post('/', isLoggedIn, periodsCtrl.create)
// DELETE localhost:3000/periods/:periodId
router.delete('/:periodId', periodsCtrl.delete)
// GET localhost:3000/periods/:periodId
router.get('/:periodId', isLoggedIn, periodsCtrl.show)
// GET localhost:3000/periods/:periodId/edit
router.get('/:periodId/edit', isLoggedIn, periodsCtrl.edit)
// PUT localhost:3000/periods/:periodId
router.put('/:periodId', isLoggedIn, periodsCtrl.update)
// POST localhost:3000/periods/:periodId/days
router.post('/:periodId/days', isLoggedIn, periodsCtrl.createDay)
// GET localhost:3000/periods/:periodId/days/:dayId/edit
router.get(
  '/:periodId/days/:dayId/edit',
  isLoggedIn,
  periodsCtrl.editDay
)
// PUT localhost:3000/periods/:periodId/days/:dayId
router.put(
  '/:periodId/days/:dayId',
  isLoggedIn,
  periodsCtrl.updateDay
)


// DELETE localhost:3000/periods/:periodId/days/:dayId

export {
  router
}
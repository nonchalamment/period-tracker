import { Router } from 'express'
import * as periodsCtrl from '../controllers/periods.js'

const router = Router()

// GET localhost:3000/periods
router.get('/', periodsCtrl.index)


export {
  router
}
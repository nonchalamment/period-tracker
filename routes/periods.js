import { Router } from 'express'
import * as periodsCtrl from '../controllers/periods.js'

const router = Router()

router.get('/', periodsCtrl.index)

export {
  router
}
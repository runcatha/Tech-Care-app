import { Router } from 'express'
import * as controllers from '../controllers/laptops.js'
// import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/laptops', controllers.getLaptops)
router.get('/laptops/:id', controllers.getLaptop)
router.post('/laptops', controllers.createLaptop)
router.put('/laptops/:id', controllers.updateLaptop)
// router.delete('/laptops/:id', restrict, controllers.deleteLaptop)

export default router
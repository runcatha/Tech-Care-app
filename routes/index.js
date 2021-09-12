import { Router } from 'express'
import laptopsRoutes from './laptops.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', laptopsRoutes)

export default router
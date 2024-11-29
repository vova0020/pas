const Router = require('express')
const router = new Router()
const line_serviceController = require('../controllers/line_userController')

router.post('/', line_serviceController.create)
router.get('/', line_serviceController.getAll )


module.exports = router

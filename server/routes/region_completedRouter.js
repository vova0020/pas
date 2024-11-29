const Router = require('express')
const router = new Router()
const region_completedController = require('../controllers/region_completedController')

router.post('/', region_completedController.create)
router.get('/', region_completedController.getAll )


module.exports = router

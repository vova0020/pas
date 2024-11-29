const Router = require('express')
const router = new Router()
const region_serviceController = require('../controllers/region_serviceController')

router.post('/', region_serviceController.create)
router.get('/', region_serviceController.getAll )


module.exports = router

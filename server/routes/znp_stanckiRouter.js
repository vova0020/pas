const Router = require('express')
const router = new Router()
const znp_stanckiController = require('../controllers/znp_stankiController')

router.post('/', znp_stanckiController.create)
router.put('/', znp_stanckiController.update)
router.get('/', znp_stanckiController.getAll )
router.delete('/', znp_stanckiController.delete )


module.exports = router

const Router = require('express')
const router = new Router()
const znp_stancki_completedController = require('../controllers/znp_stancki_completedController')

router.post('/', znp_stancki_completedController.create)
router.get('/', znp_stancki_completedController.getAll )


module.exports = router

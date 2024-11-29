const Router = require('express')
const router = new Router()
const ypakMonitorController = require('../controllers/ypackMonitorController')



router.post('/', ypakMonitorController.create)
router.get('/', ypakMonitorController.getAll)
router.get('/monitor', ypakMonitorController.getOne)
router.put('/', ypakMonitorController.update)


module.exports = router



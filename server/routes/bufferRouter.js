const Router = require('express')
const router = new Router()
const bufferController = require('../controllers/bufferController')

router.post('/', bufferController.create)
router.get('/', bufferController.getAll)
router.get('/data', bufferController.getAllDat)
router.put('/', bufferController.update)





module.exports = router
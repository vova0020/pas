const Router = require('express')
const router = new Router()
const znp_dataController = require('../controllers/znp_dataController')

router.post('/', znp_dataController.create)
router.get('/', znp_dataController.getAll)
// router.get('/:id', znp_dataController.getOne)
router.get('/region', znp_dataController.getAllZnpDatas)
router.put('/', znp_dataController.update)
router.delete('/', znp_dataController.delete)



module.exports = router
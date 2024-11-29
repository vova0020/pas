const Router = require('express')
const router = new Router()
const znpController = require('../controllers/znpController')

router.post('/', znpController.create)
router.get('/',znpController.getAll)
router.get('/getOne', znpController.getOne)
router.put('/', znpController.update)
router.delete('/', znpController.delete)


module.exports = router
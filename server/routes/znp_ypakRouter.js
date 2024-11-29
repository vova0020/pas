const Router = require('express')
const router = new Router()
const znpYpakCintroller = require('../controllers/znpYpakCintroller')

router.post('/', znpYpakCintroller.create)
router.get('/',znpYpakCintroller.getAll)
// router.get('/getOne', znpController.getOne)
router.put('/', znpYpakCintroller.update)
// router.delete('/', znpController.delete)


module.exports = router
const Router = require('express')
const router = new Router()
const ypakGuideController = require('../controllers/ypackGuideController')



router.post('/', ypakGuideController.create)
router.get('/', ypakGuideController.getAll)
router.put('/', ypakGuideController.update)
router.delete('/', ypakGuideController.delite)
router.delete('/img', ypakGuideController.deliteImg)


module.exports = router



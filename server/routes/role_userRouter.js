const Router = require('express')
const router = new Router()
const role_userController = require('../controllers/role_userController')

router.post('/', role_userController.create)
router.get('/', role_userController.getAll )


module.exports = router

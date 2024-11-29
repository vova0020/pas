const Router = require('express')
const router = new Router()
const ypack_Completed_DiagramsController = require('../controllers/ypack_Completed_DiagramsController')


router.get('/', ypack_Completed_DiagramsController.getAll)
router.get('/diagrams', ypack_Completed_DiagramsController.getPl)

module.exports = router
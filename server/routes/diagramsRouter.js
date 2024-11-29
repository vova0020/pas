const Router = require('express')
const router = new Router()
const diagramController = require('../controllers/diagramsController')

router.get('/raspil', diagramController.getAllcompletedRegionsRaspil )
router.get('/pokleika', diagramController.getAllcompletedRegionsPokleika )
router.get('/prisadka', diagramController.getAllcompletedRegionsPrisadka )
router.get('/stanckiPokleika', diagramController.getAllcompletedStanckiPokleika )
router.get('/stanckiPrisadka', diagramController.getAllcompletedStanckiPrisadka )


module.exports = router

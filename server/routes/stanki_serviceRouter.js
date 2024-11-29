const Router = require('express')
const router = new Router()
const stanki_serviceController = require("../controllers/stancki_serviceController");

    router.post('/', stanki_serviceController.create)
    router.get('/', stanki_serviceController.getAll )
    router.get('/stancki', stanki_serviceController.getAllStanock )
    router.put('/', stanki_serviceController.update )

module.exports = router
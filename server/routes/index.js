const Router = require('express')
const router = new Router()
//=========================================================================================//
const userRouter = require('./userRouter')
const userRoleRouter = require('./role_userRouter')
const bufferRouter = require('./bufferRouter')
const znpRouter = require('./znpRouter')
const znpYpakRouter = require('./znp_ypakRouter')
const znp_dataRouter = require('./znp_dataRouter')

const regionServiceRouter = require('./region_serviceRouter')
const lineServiceRouter = require('./line_serviceRouter')
const stanckiServiceRouter = require('./stanki_serviceRouter')

//История поломок не добавлена
//Учет времени не добавлен

const znpStanckiRouter = require('./znp_stanckiRouter')
const znpStanckiCompletedRouter = require('./znp_stancki_completedRouter')
const regionCompletedRouter = require('./region_completedRouter')
//========== Диаграммы ======================================
const diagramsRouter = require('./diagramsRouter')
const ypakDiagramsRouter = require('./ypakDiagramsRouter')

//==============Мониторы для упаковки===================
const ypakGuideRouter = require('./ypackGuideRouter')
const ypakMonitorsRouter = require('./ypackMonitorsRouter')


router.use('/user', userRouter )
router.use('/userRole', userRoleRouter )
router.use('/buffer', bufferRouter)
router.use('/znp', znpRouter)
router.use('/znpYpak', znpYpakRouter)
router.use('/znp_data', znp_dataRouter)
router.use('/regionService', regionServiceRouter)
router.use('/lineService', lineServiceRouter)
router.use('/stanckiService', stanckiServiceRouter)


router.use('/znpStancki', znpStanckiRouter)
router.use('/znpStanckiCompleted', znpStanckiCompletedRouter)
router.use('/regionCompleted', regionCompletedRouter)

//============ Диаграммы ===================
router.use('/diagrams', diagramsRouter)
router.use('/ypakDiagrams', ypakDiagramsRouter)

//==============Мониторы для упаковки===================
router.use('/ypakGuide', ypakGuideRouter)
router.use('/ypakMonitors', ypakMonitorsRouter)



module.exports = router
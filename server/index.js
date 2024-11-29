require('dotenv').config()
const express = require ('express')
const sequelize = require('./db')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddelware')
const events = require ('events')
const path = require('path')
const {Stanki_service} = require("./models/models");

const {Accounting_working_hours} = require("./models/models");
// const {Znp} = require("./models/models");



const PORT = process.env.PORT

const emitter = new events.EventEmitter();





const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

// let date = new Date()
// console.log(date.getHours())
// console.log(date.getMinutes())

// function cleanDateStanock(){
//     let date = new Date()
//     let hoursSmen1 = 14
//     let hoursSmen2 = 23
//
//     console.log(date.getHours())
//     if (date.getHours() === hoursSmen1){
//         if ( date.getMinutes() >= 54 && date.getMinutes() <= 57 ){
//             getServis ()
//         }
//     }else if (date.getHours() === hoursSmen2){
//         if ( date.getMinutes() >= 55 && date.getMinutes() <= 59 ){
//             getServis ()
//         }
//     }
// }
//
// setInterval(cleanDateStanock, 120000); //каждые 2 минуты
//
//
//     async function getServis () {
//         const servises = await Stanki_service.findAll()
//         for (const servis of servises) {
//             let id = servis.id
//             // console.log( servis.status)
//             if (servis.status !== "Сломан" ){
//                 const upadeStatus = await Stanki_service.update(
//                     {
//                         status:"Не готов"
//                     },
//                     {
//                         where:{id}
//                     })
//
//                 const AccountWorkingGet = await dbDiagram.query(`SELECT * FROM public."Accounting_working_hours" WHERE stanock = $1  ORDER BY id DESC LIMIT 1`,[servis.stanock])
//                 let result = AccountWorkingGet.rows
//                 console.log(result[0])
//                 for (const resultElement of result) {
//
//                     let nowTime = new Date().getHours()
//                     let id = resultElement.id
//                     const upadeStatus = await Accounting_working_hours.update(
//                         {
//                             end_status: "Не готов",
//                             end_time : new Date().getHours(),// Время
//                             final_time:nowTime - resultElement.start_time
//                         },
//                         {
//                             where:{id}
//                         })
//
//                 }
//             }
//         }
//
//     }
//










// Роли:
// Мастера:
// 1) PRISADKA
// 2) POKLEIKA
// 3) RASPIL
// 4) YPAKOVKA
// 5) DIREKTOR
// Станки
// 1) BST-1
// 2) BST-2
// 3) BHX-2
// 4) KDT-6032

// app.get("/test1", (req, res)=>{
//
//     emitter.once("newMessage", async () => {
//         const znps = await Znp.findAll()
//        res.json(znps)
//
//     })
// })
//
// app.post("/test2", ((req, res)=>{
//
//     emitter.emit("newMessage")
//     res.status(200)
//     // console.log(sob)
// }))
//

// Тестовый стенд для разбора запроса
// app.get('/test', async function (req, res) {
//     const znps = await Znp.findAll()
//     return res.status(200).json(znps)
// })
// // console.log(models.Znp)
//
// let testZNP = []
//
// getsTV()
//  async function getsTV () {
//     const znps = await Znp.findAll()
//      for (const znp of znps) {
//          console.log("id"+" "+ znp.model)
//      }
//
// }


//Обработка ошибок, последний Middlerware
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log (`Сервер запущен, порт ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
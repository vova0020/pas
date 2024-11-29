const dbDiagram = require('../dbData')

class DiagramsController{

    // Данные по участку Распил
    async getAllcompletedRegionsRaspil(req, res) {
        const {startData, endData, smen} = req.query
        if (startData != "" && endData != "" && smen != ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,smena, SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND region = 'RASPIL' GROUP BY date, smena `, [startData, endData, smen])
            return res.json(RaspilComplet.rows)
        } else if (startData  != "" && endData  != "" && smen  == ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date, SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND region = 'RASPIL'  GROUP BY date `, [startData, endData])
            return res.json(RaspilComplet.rows)
        } else if (startData  != "" && endData  == "" && smen  == ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date, SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND region = 'RASPIL'  GROUP BY date `, [startData, startData])
            return res.json(RaspilComplet.rows)
        }else if (startData != "" && endData  == "" && smen != ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,smena, SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND region = 'RASPIL' GROUP BY date, smena `, [startData, startData, smen])
            return res.json(RaspilComplet.rows)
        }
    }

// Данные по участку Поклейка
    async getAllcompletedRegionsPokleika(req, res) {
        const {startData, endData, smen} = req.query
        if (startData != "" && endData != "" && smen != ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,smena, SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND region = 'POKLEIKA' GROUP BY date, smena `, [startData, endData, smen])
            return res.json(RaspilComplet.rows)
        } else if (startData  != "" && endData  != "" && smen  == ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,  SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND region = 'POKLEIKA'  GROUP BY date `, [startData, endData])
            return res.json(RaspilComplet.rows)
        } else if (startData  != "" && endData  == "" && smen  == ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,  SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND region = 'POKLEIKA'  GROUP BY date `, [startData, startData])
            return res.json(RaspilComplet.rows)
        }else if (startData != "" && endData  == "" && smen != ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,smena,  SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND region = 'POKLEIKA' GROUP BY date, smena `, [startData, startData, smen])
            return res.json(RaspilComplet.rows)
        }
    }
    // Данные по участку Присадка
    async getAllcompletedRegionsPrisadka(req, res) {
        const {startData, endData, smen} = req.query
        if (startData != "" && endData != "" && smen != ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,smena,  SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND region = 'PRISADKA' GROUP BY date, smena `, [startData, endData, smen])
            return res.json(RaspilComplet.rows)
        } else if (startData  != "" && endData  != "" && smen  == ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,  SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND region = 'PRISADKA'  GROUP BY date `, [startData, endData])
            return res.json(RaspilComplet.rows)
        } else if (startData  != "" && endData  == "" && smen  == ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,  SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND region = 'PRISADKA'  GROUP BY date `, [startData, startData])
            return res.json(RaspilComplet.rows)
        }else if (startData != "" && endData  == "" && smen != ""){
            const RaspilComplet = await dbDiagram.query(`SELECT date,smena,  SUM(quadrature) FROM public.region_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND region = 'PRISADKA' GROUP BY date, smena `, [startData, startData, smen])
            return res.json(RaspilComplet.rows)
        }
    }

    // Данные по станкам на поклейке
    async getAllcompletedStanckiPokleika(req, res) {
        const {startData, endData, smen} = req.query
        if (startData != "" && endData != "" && smen != ""){
            const PokleikaComplet = await dbDiagram.query(`SELECT date,smena, stanock,  SUM(probeg) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND sector = 'POKLEIKA' GROUP BY date, smena,stanock `, [startData, endData, smen])
            return res.json(PokleikaComplet.rows)
        } else if (startData  != "" && endData  != "" && smen  == ""){
            const PokleikaComplet = await dbDiagram.query(`SELECT date,stanock,  SUM(probeg) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2  AND sector = 'POKLEIKA' GROUP BY date,stanock `, [startData, endData])
            return res.json(PokleikaComplet.rows)
        } else if (startData  != "" && endData  == "" && smen  == ""){
            const PokleikaComplet = await dbDiagram.query(`SELECT date,stanock,  SUM(probeg) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND sector = 'POKLEIKA'  GROUP BY date,stanock `, [startData, startData])
            return res.json(PokleikaComplet.rows)
        }else if (startData != "" && endData  == "" && smen != ""){
            const PokleikaComplet = await dbDiagram.query(`SELECT date,smena,stanock,  SUM(probeg) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND sector = 'POKLEIKA' GROUP BY date, smena,stanock `, [startData, startData, smen])
            return res.json(PokleikaComplet.rows)
        }
    }

    // Данные по станкам на присадке
    async getAllcompletedStanckiPrisadka(req, res) {
        const {startData, endData, smen} = req.query
        if (startData != "" && endData != "" && smen != ""){
            const PrisadkaComplet = await dbDiagram.query(`SELECT date,smena, stanock,  SUM(completed) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND sector = 'PRISADKA' GROUP BY date, smena,stanock `, [startData, endData, smen])
            return res.json(PrisadkaComplet.rows)
        } else if (startData  != "" && endData  != "" && smen  == ""){
            const PrisadkaComplet = await dbDiagram.query(`SELECT date,stanock, SUM(completed) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND sector = 'PRISADKA'  GROUP BY date,stanock `, [startData, endData])
            return res.json(PrisadkaComplet.rows)
        } else if (startData  != "" && endData  == "" && smen  == ""){
            const PrisadkaComplet = await dbDiagram.query(`SELECT date,stanock, SUM(completed) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND sector = 'PRISADKA'  GROUP BY date,stanock `, [startData, startData])
            return res.json(PrisadkaComplet.rows)
        }else if (startData != "" && endData  == "" && smen != ""){
            const PrisadkaComplet = await dbDiagram.query(`SELECT date,smena,stanock, SUM(completed) FROM public.znp_stancki_completeds WHERE DATE(date)   BETWEEN $1 AND $2 AND smena = $3 AND sector = 'PRISADKA' GROUP BY date, smena,stanock `, [startData, startData, smen])
            return res.json(PrisadkaComplet.rows)
        }
    }


}
module.exports = new DiagramsController()
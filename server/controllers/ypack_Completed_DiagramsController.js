const {Ypack_completed_diagrams, Znp_ypak_tabl_Comp} = require("../models/models");
const dbDiagram = require("../dbData");


class Ypack_Completed_DiagramsController{

    async getAll(req, res) {
        const {startData, endData, smen} = req.query
        if (startData != "" && endData != "" && smen != ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, smen_compl1, SUM( sum) FROM (SELECT date_compl1, smen_compl1, SUM( packed_compl1) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl1, smen_compl1 UNION ALL SELECT date_compl2, smen_compl2, SUM( packed_compl2) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl2, smen_compl2 UNION SELECT date_compl3, smen_compl3, SUM( packed_compl3) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl3, smen_compl3 UNION ALL SELECT date_compl4, smen_compl4, SUM( packed_compl4) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl4, smen_compl4 UNION ALL SELECT date_compl5, smen_compl5, SUM( packed_compl5) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl5, smen_compl5 UNION ALL SELECT date_compl6, smen_compl6, SUM( packed_compl6) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl6, smen_compl6)as t WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2 AND smen_compl1 = $3 GROUP BY date_compl1, smen_compl1  `,[startData, endData, smen])
            return res.json(znp_datas_ypak.rows)
        } else if (startData  != "" && endData  != "" && smen  == ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, SUM( sum) FROM (SELECT date_compl1, smen_compl1, SUM( packed_compl1) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl1, smen_compl1 UNION ALL SELECT date_compl2, smen_compl2, SUM( packed_compl2) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl2, smen_compl2 UNION SELECT date_compl3, smen_compl3, SUM( packed_compl3) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl3, smen_compl3 UNION ALL SELECT date_compl4, smen_compl4, SUM( packed_compl4) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl4, smen_compl4 UNION ALL SELECT date_compl5, smen_compl5, SUM( packed_compl5) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl5, smen_compl5 UNION ALL SELECT date_compl6, smen_compl6, SUM( packed_compl6) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl6, smen_compl6)as t WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl1 `,[startData, endData])
            return res.json(znp_datas_ypak.rows)
        } else if (startData  != "" && endData  == "" && smen  == ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, smen_compl1, SUM( sum) FROM (SELECT date_compl1, smen_compl1, SUM( packed_compl1) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl1, smen_compl1 UNION ALL SELECT date_compl2, smen_compl2, SUM( packed_compl2) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl2, smen_compl2 UNION SELECT date_compl3, smen_compl3, SUM( packed_compl3) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl3, smen_compl3 UNION ALL SELECT date_compl4, smen_compl4, SUM( packed_compl4) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl4, smen_compl4 UNION ALL SELECT date_compl5, smen_compl5, SUM( packed_compl5) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl5, smen_compl5 UNION ALL SELECT date_compl6, smen_compl6, SUM( packed_compl6) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl6, smen_compl6)as t WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl1, smen_compl1  `,[startData, startData])
            return res.json(znp_datas_ypak.rows)
        }else if (startData != "" && endData  == "" && smen != ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, smen_compl1, SUM( sum) FROM (SELECT date_compl1, smen_compl1, SUM( packed_compl1) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl1, smen_compl1 UNION ALL SELECT date_compl2, smen_compl2, SUM( packed_compl2) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl2, smen_compl2 UNION SELECT date_compl3, smen_compl3, SUM( packed_compl3) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl3, smen_compl3 UNION ALL SELECT date_compl4, smen_compl4, SUM( packed_compl4) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)  
                                    BETWEEN $1 AND $2  GROUP BY date_compl4, smen_compl4 UNION ALL SELECT date_compl5, smen_compl5, SUM( packed_compl5) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl5, smen_compl5 UNION ALL SELECT date_compl6, smen_compl6, SUM( packed_compl6) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)  
                                    BETWEEN $1 AND $2 GROUP BY date_compl6, smen_compl6)as t WHERE DATE(date_compl1)  
                                    BETWEEN $1 AND $2 AND smen_compl1 = $3 GROUP BY date_compl1, smen_compl1  `,[startData, startData, smen])
            return res.json(znp_datas_ypak.rows)
        }

        const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, smen_compl1, SUM( sum) FROM (SELECT date_compl1, smen_compl1, SUM( packed_compl1) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1)
                                    BETWEEN $1 AND $2  GROUP BY date_compl1, smen_compl1 UNION ALL SELECT date_compl2, smen_compl2, SUM( packed_compl2) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)
                                    BETWEEN $1 AND $2 GROUP BY date_compl2, smen_compl2 UNION SELECT date_compl3, smen_compl3, SUM( packed_compl3) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)
                                    BETWEEN $1 AND $2 GROUP BY date_compl3, smen_compl3 UNION ALL SELECT date_compl4, smen_compl4, SUM( packed_compl4) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)
                                    BETWEEN $1 AND $2  GROUP BY date_compl4, smen_compl4 UNION ALL SELECT date_compl5, smen_compl5, SUM( packed_compl5) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)
                                    BETWEEN $1 AND $2 GROUP BY date_compl5, smen_compl5 UNION ALL SELECT date_compl6, smen_compl6, SUM( packed_compl6) FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)
                                    BETWEEN $1 AND $2 GROUP BY date_compl6, smen_compl6)as t WHERE DATE(date_compl1)
                                    BETWEEN $1 AND $2 GROUP BY date_compl1, smen_compl1  `,[startData, endData])
        return res.json(znp_datas_ypak.rows)
    }

    async getPl(req,res){
        const {startData, endData, smen} = req.query
        if (startData != "" && endData != "" && smen != ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, smen_compl1, SUM( area) AS area, SUM( equivalent) AS equivalent FROM (SELECT date_compl1, smen_compl1, "packed_compl1" * "area_per_package" AS area, "packed_compl1" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1)
                BETWEEN $1 AND $2 AND smen_compl1 = $3 GROUP BY date_compl1, smen_compl1,packed_compl1 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl2, smen_compl2, "packed_compl2" * "area_per_package" AS area, "packed_compl2" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)
                BETWEEN $1 AND $2 AND smen_compl2 = $3 GROUP BY date_compl2, smen_compl2,packed_compl2 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl3, smen_compl3, "packed_compl3" * "area_per_package" AS area, "packed_compl3" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)
                BETWEEN $1 AND $2 AND smen_compl3 = $3 GROUP BY date_compl3, smen_compl3,packed_compl3 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl4, smen_compl4, "packed_compl4" * "area_per_package" AS area, "packed_compl4" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)
                BETWEEN $1 AND $2 AND smen_compl4 = $3 GROUP BY date_compl4, smen_compl4,packed_compl4 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl5, smen_compl5, "packed_compl5" * "area_per_package" AS area, "packed_compl5" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)
                BETWEEN $1 AND $2 AND smen_compl5 = $3 GROUP BY date_compl5, smen_compl5,packed_compl5,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl6, smen_compl6, "packed_compl6" * "area_per_package" AS area, "packed_compl6" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)
                BETWEEN $1 AND $2 AND smen_compl6 = $3 GROUP BY date_compl6, smen_compl6,packed_compl6 ,area_per_package, equivalent_package)as t WHERE DATE(date_compl1) 
                BETWEEN $1 AND $2 AND smen_compl1 = $3 GROUP BY date_compl1, smen_compl1`,[startData, endData, smen])

            return res.json(znp_datas_ypak.rows)

        } else if (startData  != "" && endData  != "" && smen  == ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, SUM( area) AS area, SUM( equivalent) AS equivalent FROM (
                SELECT date_compl1, "packed_compl1" * "area_per_package" AS area, "packed_compl1" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1) 
                BETWEEN $1 AND $2  GROUP BY date_compl1,packed_compl1 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl2, "packed_compl2" * "area_per_package" AS area, "packed_compl2" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)
                BETWEEN $1 AND $2 GROUP BY date_compl2, packed_compl2 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl3, "packed_compl3" * "area_per_package" AS area, "packed_compl3" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)
                BETWEEN $1 AND $2 GROUP BY date_compl3, packed_compl3 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl4, "packed_compl4" * "area_per_package" AS area, "packed_compl4" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)
                BETWEEN $1 AND $2  GROUP BY date_compl4, packed_compl4 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl5,  "packed_compl5" * "area_per_package" AS area, "packed_compl5" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)
                BETWEEN $1 AND $2  GROUP BY date_compl5,packed_compl5,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl6, "packed_compl6" * "area_per_package" AS area, "packed_compl6" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)
                BETWEEN $1 AND $2  GROUP BY date_compl6, packed_compl6 ,area_per_package, equivalent_package)as t WHERE DATE(date_compl1) 
                BETWEEN $1 AND $2 GROUP BY date_compl1`,[startData, endData])
            return res.json(znp_datas_ypak.rows)
        } else if (startData  != "" && endData  == "" && smen  == ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, SUM( area) AS area, SUM( equivalent) AS equivalent FROM (
                SELECT date_compl1, "packed_compl1" * "area_per_package" AS area, "packed_compl1" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1) 
                BETWEEN $1 AND $2  GROUP BY date_compl1,packed_compl1 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl2, "packed_compl2" * "area_per_package" AS area, "packed_compl2" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)
                BETWEEN $1 AND $2 GROUP BY date_compl2, packed_compl2 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl3, "packed_compl3" * "area_per_package" AS area, "packed_compl3" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)
                BETWEEN $1 AND $2 GROUP BY date_compl3, packed_compl3 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl4, "packed_compl4" * "area_per_package" AS area, "packed_compl4" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)
                BETWEEN $1 AND $2  GROUP BY date_compl4, packed_compl4 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl5,  "packed_compl5" * "area_per_package" AS area, "packed_compl5" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)
                BETWEEN $1 AND $2  GROUP BY date_compl5,packed_compl5,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl6, "packed_compl6" * "area_per_package" AS area, "packed_compl6" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)
                BETWEEN $1 AND $2  GROUP BY date_compl6, packed_compl6 ,area_per_package, equivalent_package)as t WHERE DATE(date_compl1) 
                BETWEEN $1 AND $2 GROUP BY date_compl1`,[startData, startData])
            return res.json(znp_datas_ypak.rows)
        }else if (startData != "" && endData  == "" && smen != ""){
            const znp_datas_ypak = await dbDiagram.query(`SELECT date_compl1, smen_compl1, SUM( area) AS area, SUM( equivalent) AS equivalent FROM (SELECT date_compl1, smen_compl1, "packed_compl1" * "area_per_package" AS area, "packed_compl1" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl1)
                BETWEEN $1 AND $2 AND smen_compl1 = $3 GROUP BY date_compl1, smen_compl1,packed_compl1 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl2, smen_compl2, "packed_compl2" * "area_per_package" AS area, "packed_compl2" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl2)
                BETWEEN $1 AND $2 AND smen_compl2 = $3 GROUP BY date_compl2, smen_compl2,packed_compl2 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl3, smen_compl3, "packed_compl3" * "area_per_package" AS area, "packed_compl3" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl3)
                BETWEEN $1 AND $2 AND smen_compl3 = $3 GROUP BY date_compl3, smen_compl3,packed_compl3 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl4, smen_compl4, "packed_compl4" * "area_per_package" AS area, "packed_compl4" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl4)
                BETWEEN $1 AND $2 AND smen_compl4 = $3 GROUP BY date_compl4, smen_compl4,packed_compl4 ,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl5, smen_compl5, "packed_compl5" * "area_per_package" AS area, "packed_compl5" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl5)
                BETWEEN $1 AND $2 AND smen_compl5 = $3 GROUP BY date_compl5, smen_compl5,packed_compl5,area_per_package, equivalent_package
                
                UNION ALL SELECT date_compl6, smen_compl6, "packed_compl6" * "area_per_package" AS area, "packed_compl6" * "equivalent_package" AS equivalent FROM public."znp_ypak_tablComps" WHERE DATE(date_compl6)
                BETWEEN $1 AND $2 AND smen_compl6 = $3 GROUP BY date_compl6, smen_compl6,packed_compl6 ,area_per_package, equivalent_package)as t WHERE DATE(date_compl1) 
                BETWEEN $1 AND $2 AND smen_compl1 = $3 GROUP BY date_compl1, smen_compl1`,[startData, startData, smen])
            return res.json(znp_datas_ypak.rows)
        }
    }



}
module.exports = new Ypack_Completed_DiagramsController()
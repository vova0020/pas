const {Ypak_guide, Ypak_monitors, Reference_Plan_Price} = require("../models/models");


class ypackMonitorController {
    async create (req,res){
        const {line, monitor, description,img } = req.body
        const newYpack = await Ypak_monitors.create({line, monitor, description,img})
        return res.json(newYpack)
    }
    async getAll (req, res) {
        const ypackDatas = await Ypak_monitors.findAll()
        return res.json(ypackDatas)
    }
    async getOne(req, res) {
        const {monitor} = req.query
        const Ypak_mon = await Ypak_monitors.findOne(
            {
                where: {monitor}

            },
        )
        return res.json(Ypak_mon)
    }
    async update (req,res) {
        const {id, line, monitor, description,img } = req.body
        console.log(id)
        console.log(img)
        const updateYpack = await Ypak_monitors.update(
            {
                line, monitor, description,img
            },
            {
                where:{id}
            })
        console.log(updateYpack)
        return res.json(updateYpack)
    }
}

module.exports = new ypackMonitorController()




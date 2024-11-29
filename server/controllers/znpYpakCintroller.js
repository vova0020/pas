const {Znp_ypak_tabl_Comp, Znp_data} = require("../models/models");


class ZnpYpakCintroller{

    async create (req, res) {
        const {
            segmentStream,// Сегмент потока
            ypakPotok,// упаковка поток
            packaging,// Принадлежность к упаковке
            order,// заказ
            ready_for_packing,//Упакованно
            packed_compl,// площадь на 1 упаковку
            area_per_package,// Эквивалент на упаковку
            equivalent_package,
            znpId
        } = req.body
        const znp_ypak_Create = await Znp_ypak_tabl_Comp.create({
            segmentStream,// Сегмент потока
            ypakPotok,// упаковка поток
            packaging,// Принадлежность к упаковке
            order,// заказ
            ready_for_packing,//готов к упаковке
            packed_compl,//Упакованно
            area_per_package,// площадь на 1 упаковку
            equivalent_package,// Эквивалент на упаковку
            znpId
        })
        return res.json(znp_ypak_Create)
    }

    async getAll (req, res) {
        const {znpId} = req.query
        const znp_datas_ypak = await Znp_ypak_tabl_Comp.findAll({
            where: {znpId}
        })
        return res.json(znp_datas_ypak)
    }
    async update(req, res){
        const {id, ready_for_packing,packed_compl, smenNumber} = req.body

        let smen = 0
        if (new Date().getHours() <15 && new Date().getHours() >5){
            smen = 1
        } else if (new Date().getHours()>=15 && new Date().getHours() <= 24){
            smen = 2
        }

        if (smenNumber == 1){
            const updateZnp = await Znp_ypak_tabl_Comp.update(
                {
                packed_compl1: packed_compl,
                date_compl1: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
                smen_compl1: smen
                },
                {
                    where:{id}
                })
            return res.json(updateZnp)
        } else if (smenNumber == 2){
            const updateZnp = await Znp_ypak_tabl_Comp.update(
                {
                    packed_compl2: packed_compl,
                    date_compl2: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
                    smen_compl2: smen
                },
                {
                    where:{id}
                })
            return res.json(updateZnp)
        } else if (smenNumber == 3){
            const updateZnp = await Znp_ypak_tabl_Comp.update(
                {
                    packed_compl3: packed_compl,
                    date_compl3: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
                    smen_compl3: smen
                },
                {
                    where:{id}
                })
            return res.json(updateZnp)
        } else if (smenNumber == 4){
            const updateZnp = await Znp_ypak_tabl_Comp.update(
                {
                    packed_compl4: packed_compl,
                    date_compl4: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
                    smen_compl4: smen
                },
                {
                    where:{id}
                })
            return res.json(updateZnp)
        } else if (smenNumber == 5){
            const updateZnp = await Znp_ypak_tabl_Comp.update(
                {
                    packed_compl5: packed_compl,
                    date_compl5: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
                    smen_compl5: smen
                },
                {
                    where:{id}
                })
            return res.json(updateZnp)
        }else if (smenNumber == 6){
            const updateZnp = await Znp_ypak_tabl_Comp.update(
                {
                    packed_compl6: packed_compl,
                    date_compl6: new Date().toLocaleDateString(),// Устанавливаем автоматически только дату добавления
                    smen_compl6: smen
                },
                {
                    where:{id}
                })
            return res.json(updateZnp)
        } else {
            const updateZnp = await Znp_ypak_tabl_Comp.update(
                {
                    ready_for_packing,
                },
                {
                    where:{id}
                })
            return res.json(updateZnp)
        }
    }

}
module.exports = new ZnpYpakCintroller()
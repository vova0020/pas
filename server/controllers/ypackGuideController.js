const {Ypak_guide, Znp} = require("../models/models");
const uuid = require('uuid')
const path = require('path')
const fs = require("fs");

class ypackGuideController {
    async create (req,res){
        const {series, model, packing_scheme } = req.body
        const {img1, img2, img3, img4,img5,img6,img7,img8,img9,img10,img11,img12 } = req.files
        let fileNameimg1
        let fileNameimg2
        let fileNameimg3
        let fileNameimg4
        let fileNameimg5
        let fileNameimg6
        let fileNameimg7
        let fileNameimg8
        let fileNameimg9
        let fileNameimg10
        let fileNameimg11
        let fileNameimg12

        if(img1 || img1 === null){
             fileNameimg1 = uuid.v4() + ".jpg"
            img1.mv(path.resolve(__dirname, '..', 'static', fileNameimg1))
        }
        if (img2){
             fileNameimg2 = uuid.v4() + ".jpg"
            img2.mv(path.resolve(__dirname, '..', 'static', fileNameimg2))
        }
        if (img3){
             fileNameimg3 = uuid.v4() + ".jpg"
            img3.mv(path.resolve(__dirname, '..', 'static', fileNameimg3))
        }
        if (img4){
             fileNameimg4 = uuid.v4() + ".jpg"
            img4.mv(path.resolve(__dirname, '..', 'static', fileNameimg4))
        }
        if (img5){
             fileNameimg5 = uuid.v4() + ".jpg"
            img5.mv(path.resolve(__dirname, '..', 'static', fileNameimg5))
        }
        if (img6){
             fileNameimg6 = uuid.v4() + ".jpg"
            img6.mv(path.resolve(__dirname, '..', 'static', fileNameimg6))
        }
        if (img7){
             fileNameimg7 = uuid.v4() + ".jpg"
            img7.mv(path.resolve(__dirname, '..', 'static', fileNameimg7))
        }
        if (img8){
             fileNameimg8 = uuid.v4() + ".jpg"
            img8.mv(path.resolve(__dirname, '..', 'static', fileNameimg8))
        }
        if (img9){
             fileNameimg9 = uuid.v4() + ".jpg"
            img9.mv(path.resolve(__dirname, '..', 'static', fileNameimg9))
        }
        if (img10){
             fileNameimg10 = uuid.v4() + ".jpg"
            img10.mv(path.resolve(__dirname, '..', 'static', fileNameimg10))
        }
        if (img11){
             fileNameimg11 = uuid.v4() + ".jpg"
            img11.mv(path.resolve(__dirname, '..', 'static', fileNameimg11))
        }
        if (img12){
             fileNameimg12 = uuid.v4() + ".jpg"
            img12.mv(path.resolve(__dirname, '..', 'static', fileNameimg12))
        }
        const newYpack = await Ypak_guide.create({series, model, packing_scheme, img1: fileNameimg1, img2: fileNameimg2, img3: fileNameimg3, img4: fileNameimg4,img5: fileNameimg5,img6: fileNameimg6,img7: fileNameimg7,img8: fileNameimg8,img9: fileNameimg9,img10: fileNameimg10,img11: fileNameimg11, img12: fileNameimg12 })
        return res.json(newYpack)
    }

    async getAll (req, res) {
        // const {series} = req.query
        const ypackDatas = await Ypak_guide.findAll(
            // { where: {series}},
        )
        // console.log(ypackDatas)
        return res.json(ypackDatas)
    }

    // async getOne(req, res) {
    //     const {name} = req.query
    //     const Reference = await Reference_Plan_Price.findOne(
    //         {
    //             where: {name}
    //
    //         },
    //     )
    //     return res.json(Reference)
    // }
    async update (req,res) {
        const {id,activity, series, model, packing_scheme,delImg1, delImg2, delImg3, delImg4, delImg5, delImg6, delImg7, delImg8, delImg9, delImg10 } = req.body
        if (req.files !== undefined && req.files !== null ){
            const {img1, img2, img3, img4,img5,img6,img7,img8,img9,img10,img11,img12 } = req.files
            let fileNameimg1
            let fileNameimg2
            let fileNameimg3
            let fileNameimg4
            let fileNameimg5
            let fileNameimg6
            let fileNameimg7
            let fileNameimg8
            let fileNameimg9
            let fileNameimg10
            let fileNameimg11
            let fileNameimg12

            if(img1 || img1 === null){
                fileNameimg1 = uuid.v4() + ".jpg"
                img1.mv(path.resolve(__dirname, '..', 'static', fileNameimg1))
            }
            if (img2|| img2 === null){
                fileNameimg2 = uuid.v4() + ".jpg"
                img2.mv(path.resolve(__dirname, '..', 'static', fileNameimg2))
            }
            if (img3|| img3 === null){
                fileNameimg3 = uuid.v4() + ".jpg"
                img3.mv(path.resolve(__dirname, '..', 'static', fileNameimg3))
            }
            if (img4|| img4 === null){
                fileNameimg4 = uuid.v4() + ".jpg"
                img4.mv(path.resolve(__dirname, '..', 'static', fileNameimg4))
            }
            if (img5|| img5 === null){
                fileNameimg5 = uuid.v4() + ".jpg"
                img5.mv(path.resolve(__dirname, '..', 'static', fileNameimg5))
            }
            if (img6|| img6 === null){
                fileNameimg6 = uuid.v4() + ".jpg"
                img6.mv(path.resolve(__dirname, '..', 'static', fileNameimg6))
            }
            if (img7|| img7 === null){
                fileNameimg7 = uuid.v4() + ".jpg"
                img7.mv(path.resolve(__dirname, '..', 'static', fileNameimg7))
            }
            if (img8|| img8 === null){
                fileNameimg8 = uuid.v4() + ".jpg"
                img8.mv(path.resolve(__dirname, '..', 'static', fileNameimg8))
            }
            if (img9|| img9 === null){
                fileNameimg9 = uuid.v4() + ".jpg"
                img9.mv(path.resolve(__dirname, '..', 'static', fileNameimg9))
            }
            if (img10 || img10 === null){
                fileNameimg10 = uuid.v4() + ".jpg"
                img10.mv(path.resolve(__dirname, '..', 'static', fileNameimg10))
            }
            if (img11){
                fileNameimg11 = uuid.v4() + ".jpg"
                img11.mv(path.resolve(__dirname, '..', 'static', fileNameimg11))
            }
            if (img12){
                fileNameimg12 = uuid.v4() + ".jpg"
                img12.mv(path.resolve(__dirname, '..', 'static', fileNameimg12))
            }

            if (delImg10 || delImg10 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg10), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg10))
                })
            }
            if (delImg9 || delImg9 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg9), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg9))
                })
            }
            if (delImg8 || delImg8 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg8), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg8))
                })
            }
            if (delImg7 || delImg7 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg7), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg7))
                })
            }
            if (delImg6 || delImg6 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg6), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg6))
                })
            }
            if (delImg5 || delImg5 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg5), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg5))
                })
            }
            if (delImg4 || delImg4 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg4), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg4))
                })
            }
            if (delImg3 || delImg3 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg3), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg3))
                })
            }
            if (delImg2 || delImg2 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg2), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg2))
                })
            }
            if (delImg1 || delImg1 != null){
                fs.access(path.resolve(__dirname, '..', 'static', delImg1), fs.F_OK, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    fs.unlinkSync(path.resolve(__dirname, '..', 'static', delImg1))
                })
            }
            const updateYpack = await Ypak_guide.update(
                {
                    series, model, packing_scheme, img1: fileNameimg1, img2: fileNameimg2, img3: fileNameimg3, img4: fileNameimg4,
                    img5: fileNameimg5,img6: fileNameimg6,img7: fileNameimg7,img8: fileNameimg8,img9: fileNameimg9,img10: fileNameimg10,img11: fileNameimg11, img12: fileNameimg12
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)

        } else if (activity) {
            const ypackDatas = await Ypak_guide.findAll(
                // { where: {series}},
            )
            for (const ypackData of ypackDatas) {

                const updateYpack = await Ypak_guide.update(
                    {
                        activity:false
                    },
                    {
                        where:{id:ypackData.id}
                    })
            }
            const updateYpack = await Ypak_guide.update(
                {
                    activity:true
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        } else {
            const updateYpack = await Ypak_guide.update(
                {
                    series, model, packing_scheme
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }
    }


    async deliteImg (req,res) {
        console.log("Запрос пришел")
        const {id, post} = req.body
        const ypackDatas = await Ypak_guide.findOne(
            { where: {id}},
        )
        if (post == "Пост 10"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img10), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img10))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img10:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        } else if (post == "Пост 9"){
             fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img9), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img9))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img9:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 8"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img8), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img8))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img8:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 7"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img7), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img7))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img7:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 6"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img6), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img6))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img6:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 5"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img5), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img5))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img5:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 4"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img4), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img4))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img4:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 3"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img3), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img3))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img3:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 2"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img2), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img2))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img2:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }else if (post == "Пост 1"){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img1), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img1))
            })
            const updateYpack = await Ypak_guide.update(
                {
                    img1:null
                },
                {
                    where:{id}
                })
            return res.json(updateYpack)
        }
    }

    async delite (req,res) {
        const {id} = req.body
        const ypackDatas = await Ypak_guide.findOne(
            { where: {id}},
        )
        if (ypackDatas.img10 || ypackDatas.img10 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img10), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img10))
            })
        }
        if (ypackDatas.img9 || ypackDatas.img9 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img9), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img9))
            })
        }
        if (ypackDatas.img8 || ypackDatas.img8 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img8), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img8))
            })
        }
        if (ypackDatas.img7 || ypackDatas.img7 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img7), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img7))
            })
        }
        if (ypackDatas.img6 || ypackDatas.img6 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img6), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img6))
            })
        }
        if (ypackDatas.img5 || ypackDatas.img5 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img5), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img5))
            })
        }
        if (ypackDatas.img4 || ypackDatas.img4 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img4), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img4))
            })
        }
        if (ypackDatas.img3 || ypackDatas.img3 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img3), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img3))
            })
        }
        if (ypackDatas.img2 || ypackDatas.img2 != null){
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img2), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img2))
            })
        }
        if (ypackDatas.img1 || ypackDatas.img1 != null) {
            fs.access(path.resolve(__dirname, '..', 'static', ypackDatas.img1), fs.F_OK, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
                fs.unlinkSync(path.resolve(__dirname, '..', 'static', ypackDatas.img1))
            })
        }

        const delYpac = await  Ypak_guide.destroy(
            {
                where: {id}
            })

        console.log(ypackDatas.series)
        return res.json(delYpac)
    }

}

module.exports = new ypackGuideController()




const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJwt = (id, login, role, sector, line, workplace)=>{
    return jwt.sign(
        {id, login, role, sector, line, workplace},
        process.env.SECRET_KEY,
        {expiresIn: '48h'}
    )
}

class UserController{
    async registration(req,res){
        const {login, password, name, surname, phone_number, role, sector, line, workplace}= req.body
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login,role, password: hashPassword, name, surname, phone_number, sector, line, workplace})
        const token = generateJwt(user.id, user.login, user.role,user.sector, user.line, user.workplace )
        return res.json({token})

    }

    async login(req,res){
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return res.status(401).json ({message:"Ошибка. Неверный логин!"})
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword){
            return res.status(401).json ({message:"Ошибка. Неверный пароль!"})
        }
        const token = generateJwt( user.id, user.login, user.role,user.sector, user.line, user.workplace)
        return res.json({token})
    }
    async check(req,res, next){
         const token = generateJwt(req.user.id, req.user.login, req.user.role, req.user.sector, req.user.line, req.user.workplace)
        return res.json({token})
    }

    async update(req,res){
        const {id,login, password, name, surname, phone_number, role, sector, line, workplace, visibility}= req.body
        const updateUser = await User.update(
            {
                login, password, name, surname, phone_number, role, sector, line, workplace, visibility
            },
            {
                where:{id}
            })
        return res.json(updateUser)
    }
}

module.exports = new UserController()
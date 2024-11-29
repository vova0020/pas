const jwt = require('jsonwebtoken')

module.exports = function(role){
    return  function (req, res){
        if (req.method === "OPTIONS"){

        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token){
                return res.status(401).json({message:"Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role){
                return res.status(403).json({message:"Нет доступа"})
            }
            req.user = decoded

        } catch (e) {
            res.status(401).json({message:"Не авторизован"})
        }
    }
}





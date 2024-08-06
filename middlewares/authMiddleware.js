const jwt = require("jsonwebtoken");


const authenticationToken = (req,res, next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null){
        return res.status(401).json({message: `Usuario não autorizado`})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, dados)=>{
        if(err){
            return res.status(403).json({message: `Token invalido`});
        }
        req.dados = dados;
        next()
    });
};



module.exports = authenticationToken;




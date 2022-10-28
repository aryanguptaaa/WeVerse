const jwt = require('jsonwebtoken');

function verify(req,res,next){
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];     // in order to take token only

        jwt.verify(token,process.env.KEY,(err,user)=>{
            if(err) res.status(403).json('Token not valid.');
            req.user = user;
            next();
        });
    } else{
        return res.status(401).json("Not authenticated.");
    }
}

module.exports = verify;
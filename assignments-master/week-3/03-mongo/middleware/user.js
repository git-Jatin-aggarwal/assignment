const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    async function  adminMiddleware(req, res, next) {
        // Implement admin auth logic
        // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
        const {username , password} = req.header
    
        const checkUser = await User.findOne({username : username})
    
        if(!checkUser){
               return res.json({
                msg : "user dosenot Exists"
               })
        }
        next()
    }
}

module.exports = userMiddleware;
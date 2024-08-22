const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    try {
        const {username , password} = req.body
    
        const checkUsername = await User.findOne({username : username})
    
        if(checkUsername){
            return  res.json({
                msg: "Username already Avaliable"
               })
        }
    
        const userCreated = await  User.create({
            username ,
            password
        })
    
        if(userCreated){
         return  res.json({
            msg: "User created successfully"
           })
        }else{
          return  res.json({
                msg: "something Went Wrong"
            })
        }
    } catch (error) {
        throw error
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic

    try {
        const {username } = req.header

       const foundCourses = await User.findOne({username: username})

       return req.json({
         courses : foundCourses
       })

    } catch (error) {
        throw error
    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
  
    const courseId = req.path

    const courseBuy = await User.findOneAndUpdate({
        purchasedCourses : courseId
    })

    if(!courseBuy){
        return res.json({
            msg: "something Went Wrong"
        })
    }

    return res.json({
        msg: "Course buyed"
    })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic

    try {
        const {username } = req.header

       const foundCourses = await User.findOne({username: username})

       return req.json({
         courses : foundCourses
       })

    } catch (error) {
        throw error
    }
});

module.exports = router
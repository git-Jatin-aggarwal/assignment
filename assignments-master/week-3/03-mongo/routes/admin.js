const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const {username , password} = req.body
    
        const checkUsername = await Admin.findOne({username : username})
    
        if(checkUsername){
            return  res.json({
                msg: "Username already Avaliable"
               })
        }
    
        const userCreated = await  Admin.create({
            username ,
            password
        })
    
        if(userCreated){
         return  res.json({
            msg: "Admin created successfully"
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

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    try {

        const {title , description , price, imageLink} = req.body
        
         const courseCreated =await  Course.create({
            title,
            description,
            price,
            imageLink
         })

         if(!courseCreated){
            return  res.json({
                msg: "something Went Wrong"
            })
         }

         return   res.json({
            msg: "Course created successfully",
           courseId : courseCreated._id
        })

    } catch (error) {
        throw error
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    try {
        const {username } = req.header

       const foundCourses = await Admin.findOne({username: username})

       return req.json({
         courses : foundCourses
       })

    } catch (error) {
        throw error
    }
});

module.exports = router;
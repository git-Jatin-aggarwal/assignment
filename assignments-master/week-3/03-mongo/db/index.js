const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://jatin:KQfWlGWLCUb92BCP@cluster0.6ykgjmi.mongodb.net');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
   
    username:{
        type : String,
        require: true,
        unique: true 
    },
    
  

    password:{
        type:String,
        require:true
    },

    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]



});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type : String,
        require: true,
        unique: true 
    },
    
  

    password:{
        type:String,
        require:true
    },

    purchasedCourses:[{
        type: String
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here

    title:{
        type:String,
        require:true,
    },

    descritpion:{
        type:String,
    },

    price:{
        type:Number,
        require: true
    },
    
    imageLink:{
        type:String,
    
    },

    published:{
        type: Boolean,
        default : false
    }

    
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
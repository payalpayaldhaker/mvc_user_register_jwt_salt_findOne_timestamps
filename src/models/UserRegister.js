
const { mongoose } = require('../config/database'); 

//let object = new ClassName();
 let userSchema = new mongoose.Schema({ 
    firstname:{ 
        type:String,
        required:true,
        description:"must be a firstname and is required"
    },
    lastname:{ 
        type:String,
        required:true,
        description:"must be a string and is required"
    },
    email:{ 
        type:String,
        required:true,
        description:"must be a email  is required"
    },
    password:{ 
        type:String,
        required:true,
        description:"must be a password_hash and is required"
    },
    dateofbirth:{ 
        type:String,
        required:true,
        description:"must be a dateofbirth and is required"
    },
    role:{ 
        type:String,
        required:true,
        description:"must be a role and is required"
    }
 },
     { 
        timestamps:true  
     }
);

const User = mongoose.model('userregister',userSchema);

exports.User = User
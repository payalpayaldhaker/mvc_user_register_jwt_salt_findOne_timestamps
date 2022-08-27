const { User } = require("../models/UserRegister")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let registerController = (req,res)=>{ 

    //console.log(req.body.email);
   
    User.findOne({email:req.body.email},function(error,user){ 
            // user empty
           if( user === null){
           
            const saltRounds = 10;
            const encryptHash = bcrypt.hashSync(req.body.password,saltRounds);
            req.body.password = encryptHash;
            
            
            
            let userRegisetObject = new User(req.body);
            userRegisetObject.save().then(()=>{ 
            
            //lets create jwt token
            //object.method(firstargument,secondargument);
           
                let token = jwt.sign(req.body,process.env.JWT_TOKEN);
                let  jwtData = { 
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    email:req.body.email,
                    password:req.body.password,
                    dateofbirth:req.body.dateofbirth,
                    role:req.body.role,
                    token:token
                
                    }
                    console.log(token);
                    delete jwtData.email;
                    delete jwtData.password;
                        
                res.status(200).json({       
                    "mgs":"user rigster succesfuuly",
                    jwtData:jwtData
                });
                
            }).catch((error)=>{ 
                console.log(error);
                res.status(500).json({ 
                    "error":error
                });
             })
            }
            //user not empty
            else { 
                 res.status(500).json({"erorr":"allready available "});
                }
            });
   
    
    
 }
module.exports = {registerController}

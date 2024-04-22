const env=require('dotenv').config().parsed;
console.log(env)
let gerneratejwttoken=function(user){
    return jwt.sign(user,env.ScreteKey)
}
let Create=(request,response)=>{
    const email= request.body.email;
    user.find({email: email}).then((data)=>{
        if(data.length==0){
            user.create(request.body).then((userData)=>response.status(201).json({
                "message":"User created successfully","token":gerneratejwttoken({userid:userData._id.toString(),name:userData.name,email:userData.email}),"userId":userData._id
            })).catch((err)=>{
                response.status(500).json({
                    "status":"failure",
                    "message":"Data not created",
                    "error":err
                })
            })
        }else{
            response.status(409).json("User already exists")
                }
    })

}
let Login=(request,respos)=>{
    console.log(request.body);
    user.find({email:request.body.email,password:request.body.password}).then((data)=>{
        console.log(data.length)
        if (data.length===0) {
            console.log(data.length)
            respos.status(401).json({"status":"failure","Message":"Invalid Username or Password","error":err}) 
        }
        respos.status(200).json({
            'accessToken':gerneratejwttoken({id: data[0]._id.toString(),name:data[0].name,email:data[0].email}), 
        })
        
    }).catch((err)=>{  
        respos.status(500).json({"status":"failure","error":err}) 
    })
}
module.exports={Create,Login}
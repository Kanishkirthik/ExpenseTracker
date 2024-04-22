let CreateExpences=(request,response)=>{
    try{
         expence.create(request.body).then(()=>{
            response.status(201).send(request.body);
        })
    }catch(err){
        console.log(err)
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : err
        }
        )
    }
}
let GetExepences=(request,response)=> {
    try{
        expence.find({"userId":request.params.userId}).then((data)=>{
            response.status(200).send(data);
        })
    }
    catch(err){
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : err
        })
    }
}
let updateExpences=(request,response)=>{
    try{
         expence.findByIdAndUpdate(request.params.id,request.body).then((data)=>{
            response.status(200).send(data)
        })
    }catch(err){
        response.status(404).json({
            "status":"failure",
            "message":"No such entry found",
            "error":err

        })
    }
}
let deleteExpense=(request,response)=>{
    try{
        expence.findByIdAndDelete(request.params.id).then(()=>response.status(200).json({
            "message":"deleted sucessfully"
        }))
    }
    catch(err){
        response.status(404).json({
            "status":"failure",
            "message":"No such entry found",
            "error":err

        })
    }
}
module.exports = { CreateExpences,GetExepences, deleteExpense, updateExpences }
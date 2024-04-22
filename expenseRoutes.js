const express=require('express');
const router=express.Router()
let auth=function(req ,res ,next){
    let token= req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) return res.sendStatus(403); 
    else{
        jwt.verify(token,env.ScreteKey,(error)=>{
            if (error) return res.sendStatus(500);
            else{
                next()
            }
        })    
    }
}
const { CreateExpences,GetExepences, deleteExpense, updateExpences } = require("../Controllers/ExpenseControllers");
router.post('/expences/post-req', auth,CreateExpences )
router.get('/expences/get-req/:userId', auth,GetExepences)
router.patch('/expences/update-req/:id',auth,updateExpences);
router.delete('/expences/delete-req/:id', auth,deleteExpense)
module.exports = router;
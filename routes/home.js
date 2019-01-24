let express=require('express');
let router=express.Router();

router.get('/home',(req,res)=>{
    res.render('home')
})


router.get('/login',(req,res)=>{
    res.render('login')
}) 


router.get('/logout',(req,res)=>{
    res.render('logout')
})
module.exports = router
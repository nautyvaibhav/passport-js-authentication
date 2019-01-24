let express=require('express');
let home=require('./routes/home');
let login =require('./routes/login')
let app=express();

app.set('view engine','ejs');

app.use('/auth',home);
app.use('/auth',login);





app.listen(3000,()=>console.log('listening on port 3000'))
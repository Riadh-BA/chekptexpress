// require express
const express=require("express")

//create instance
const app=express()

// middelware
app.use(express.json()) //you can use body parser instead
app.use(function (req, res, next) {
    var date = new Date();
    if((date.getDay == 0) || (date.getDay == 6) || (date.getHours() < 9) || (date.getHours > 17)){
        next();
    }else{
        res.redirect('/offlinepage');
        
    }
});

//create port
const PORT = 5000

// create server
app.listen(PORT,(error)=>{
    error?console.log(error):console.log("server created successfly")
})

app.set('view engine','pug')
app.set('views','./views')

app.get('/offlinepage',(req,res)=>{
    res.render('offlinepage')
})
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/service',(req,res)=>{
    res.render('services')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})



const express = require('express')
const path = require('path')
const converter = require('./utils/converter')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT||3000

//Make the paths
const viewsPath = path.join(__dirname,'../templates/views')
const staticPath = path.join(__dirname,'../public')
const partialsPath = path.join(__dirname,'../templates/partials')


//Set express config
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Use static 

app.use(express.static(staticPath))

app.get('', (req, res) =>{
    res.render('index',{
        title:'Currency',
        name:'Arun'
    })
    
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Currency',
        name:'Arun'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Currency',
        name:'Arun'
    })
})

app.get('/convert',(req,res)=>{
    if(!req.query.from||req.query.to){
      return  res.send({error:'Please provide a from or to cuurency'})
    }
    if(!req.query.fromval){
        return req.send({error:'Please provide a conversion value'})
    }
    converter(from,to,fromval,(error,response)=>{
        if(error){
            return res.send({error})
        }
        res.send({response})
    })
})


app.listen(port,()=>{
    console.log('Server started on port'+port)
})
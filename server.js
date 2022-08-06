
const express =require('express')
const app=express()
// const cors=require('cors')
const PORT=8080

// app.use(cors())
const rappers={
    '21 savage':{
        'age':'28',
        'birthName':'Sheyaa Alayau haah',
        'birthLocation':'london, England'
    },

    'chance the rapper':{
        'age':'29',
        'birthName':'chancellor the bennet',
        'birthLocation':'Chicago, Illinois'
    },

    'unkown':{
        'age':'0',
        'birthName':'unkown',
        'birthLocation':'unkown'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request,response)=>{
    response.json(rappers)
})
app.get('/api/:name',(request,response)=>{
   const rapperName=request.params.name.toLowerCase()

    if(rappers[rapperName]){
        response.json(rappers[rapperName])

    }
    else{
        response.json(rappers['unkown'])
    }
})

app.listen( process.env.PORT || PORT,()=>{
    console.log(`The server is now running on port ${PORT}`)
})
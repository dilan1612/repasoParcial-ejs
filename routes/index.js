const routes = require('express').Router()

const guitars = require('../data/guitars')

routes.get('/',(req,res)=>{
  return res.render('index',{'title':'Página Inicial','data':guitars})
})

routes.get('/new-record',(req,res)=>{
    return res.render('new-record',{'title':"Agregar Guitarra"})
  })

routes.post("/new-record",(req,res)=>{
  const {id,name} = req.body
  console.log(`Se recibieron id=${id} name=${name}`)
  //TODO agrega al mapa
  //Se redirecciona a la ruta ("/"), para actualizar los registros
  console.log('vamos a redireccionar')
  res.redirect('/')
  
}) 

module.exports = routes
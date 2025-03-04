const exp = require('express');
require('dotenv').config();
const modeloProducto=require('./src/models/products.model')
const app=exp();



app.use(exp.urlencoded({extended: false})); 
app.use(exp.json());

const enrutador= require('./src/routes/router')
app.use('/v1',enrutador)

//crtl+k+c
// app.get('/productos', async (req,res)=>{
//   let listaProductos = await modeloProducto.find();
//   if(listaProductos){
//     res.status(200).json(listaProductos)

//   }else{
//     res.status(500).json({error})

//   }
// });
app.get('/productos/:ref', async (req,res)=>{
  let listaProductos = await modeloProducto.findOne({"referencia":req.params.id});
  console.log(listaProductos)
  res.json(listaProductos)
});
app.listen(process.env.PORT, ()=>{
  console.log('Aplicacion corriendo en el puerto'+process.env.PORT);  
});
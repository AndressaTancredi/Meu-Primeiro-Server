const express = require('express') //Sempre passa ele como string
/* Outra opção do ES6:
import express from 'express' */

const cors = require('cors') 
const bodyParser = require('body-parser')
const controller = require('../ComidasController')

const servidor = express() //Meu servidor usa o express
servidor.use(cors()) //Meu servidor usa o CORS 

servidor.get("/comidas", (request, response)=>{
  response.send(controller.getAll())
})
//Usa o bodyParser para quando chegar no body já estiver parseado.
servidor.post('./comidas', bodyParser.json(), (request,response) => {
  
  controller.add(request.body)
  response.send(201)
})

servidor.listen(3000);
console.log("servidor wonderful rodando na porta 300");
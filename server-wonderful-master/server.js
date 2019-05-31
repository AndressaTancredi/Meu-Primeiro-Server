const express = require('express') //Sempre passa ele como string
/* Outra opção do ES6:
import express from 'express' */

const cors = require('cors') 
const controller = require('../ComidasController')

const servidor = express() //Meu servidor usa o express
servidor.use(cors()) //Meu servidor usa o CORS 

servidor.get("/comidas", (request, response)=>{
  response.send(controller.getAll())
})

servidor.listen(3000);
console.log("servidor wonderful rodando na porta 300");
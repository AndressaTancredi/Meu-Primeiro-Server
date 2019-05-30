const express = require('express')

const comidas = { pratosFavoritos: [
]}

const servidor = express()

servidor.get("/comidas", (request, response)=>{
  response.send("Boa noite, amigas!")
})
      
servidor.listen(3000)
console.log("servidor wonderful rodando na porta 3000")
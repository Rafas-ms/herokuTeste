const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Trabalho Prático: Avaliação de Serviços em Nuvem para Publicação de API!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
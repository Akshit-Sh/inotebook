const connectTOmongoose = require('./db');
const express = require('express')
connectTOmongoose();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Akshit!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
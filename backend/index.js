const connectTOmongoose = require('./db');
const express = require('express')
connectTOmongoose();


const app = express()
const port = 3000

app.use(express.json());
app.get('/', (req, res) => {
})
// available routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
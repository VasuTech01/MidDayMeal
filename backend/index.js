const connectToMongo = require('./db/mongoose');
const express = require('express');
// const port = process.env.PORT || 3000;
connectToMongo();

const app = express()
const port = 3000

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));

app.get('/', (req, res) => {
  res.send(' World!')
})

app.listen(port, () => {
  console.log(`Example app ljgcgghhistening on port ${port}`)
})
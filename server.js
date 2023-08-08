
import './src/db/dbConnect.js'
import app from './src/app.js'

// semelhante ao import const express = require('express')

const host = 'localhost'
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}: ${port}`)
})
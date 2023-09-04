import express from 'express'

// semelhante ao import const express = require('express')
const app = express()
app.use(cors())

export default app.use(express.urlencoded({extended: true})
)

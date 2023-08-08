import express from 'express'

// semelhante ao import const express = require('express')
const app = express()

export default app.use(express.urlencoded({extended: true})
)

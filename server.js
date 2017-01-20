const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/api', rootRouter)

app.listen(port, () => {
    console.log("Listening on port ", port)
})
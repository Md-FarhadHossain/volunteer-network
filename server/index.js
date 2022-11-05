const express = require('express')
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 5000 

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

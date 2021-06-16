const express = require('express')
const app = express()
const port = 3001

index = require("./index.html")

app.get('/', (req, res) => {
    res.send({
        index
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


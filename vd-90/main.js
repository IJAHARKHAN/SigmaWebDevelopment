const express = require('express')
const app = express()
const fs = require('fs');
const port = 3000



// Middleware function to log request time
app.use((req, res, next) => {
    fs.appendFileSync('log.txt', `Time: ${new Date().toLocaleString()} is a ${req.method}\n`);
 //   console.log('Time:', new Date().toLocaleString());
  next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

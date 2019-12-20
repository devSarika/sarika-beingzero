const express = require('express')
const app = express()
const port = process.env.PORT||3000

app.use(express.static('frontend')) //this line tells express to serve js or css files from frontend folder


//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))
var student={"name":"sarika","clg":"vnr"}
app.get('/data', (req, res) => res.json(student))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
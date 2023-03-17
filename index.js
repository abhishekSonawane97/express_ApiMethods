const express = require('express');

const app = express();
app.use(express.json());
const calculatorRoutes = require('./routes/calculatorRoute')
const todoRoutes = require('./routes/todoRoute')

const port = 2000;


app.get('/', (req, res)=>{
    res.send(`<h1>Digikull</h1>`)
});



let file = `<h1>Home Page</h1>`;

app.use('/calculator', calculatorRoutes)
app.use('/todos', todoRoutes)
// app.use('/home', homeRoute)
// app.use('/about', homeRoute)

app.listen(port, ()=> console.log('server is running on port 2000'))

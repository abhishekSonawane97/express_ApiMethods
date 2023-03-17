const express = require('express');

const app = express();
app.use(express.json());
const calculatorRoutes = require('./routes/calculatorRoute')
const todoRoutes = require('./routes/todoRoute')

const port = 2000;

app.get('/', (req, res)=>{
    res.send(`<h1 style='text-align:center; margin-top: 20vh; color:cyan; background: black;'>Digikull</h1>`)
});

app.use('/calculator', calculatorRoutes)
app.use('/todos', todoRoutes)

app.listen(port, ()=> console.log('server is running on port 2000'))

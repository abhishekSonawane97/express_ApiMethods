const express = require('express');

const app = express();
app.use(express.json())

const port = 2000;


app.get('/', (req, res)=>{
    res.send('Digikull')
});


let x = 100;

app.get('/calculator', (req, res)=>{
    res.send(`value : ${x}`)
});

app.put('/calculator', (req, res)=>{
    let newVal = x+(req.body.val);
    res.send(`value : ${newVal}`)
});

app.delete('/calculator', (req, res)=>{
    res.send(`value has been reset : ${x}`)
});


let arr = [11, 22, 33, 44, 55, 66]
app.get('/todos', (req, res)=>{
    res.send(`Array Items : ${arr}`)
});

app.post('/todos', (req, res)=>{
    let newVal = (req.body.val)
    let newArr = arr
    newArr.push(newVal)
    arr=  [...newArr];
    res.send(`New item has beed added, New Array Items : ${arr}`)
});


app.delete('/todos/:ind', (req, res)=>{
    let indexNum = Number(req.params.ind);
    let newArr = arr 
    for(let i=0;i<newArr.length;i++){
        if(indexNum === i){
            newArr.splice(i,1)
            break;
        }
    }
    arr=  [...newArr];
    res.send(`value has been deleted, New Array Items : ${arr}`)
});

app.listen(port, ()=> console.log('server is running on port 2000'))

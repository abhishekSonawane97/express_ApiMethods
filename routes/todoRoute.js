const express = require('express');
const router = express.Router();


let arr = [11, 22, 33, 44, 55, 66]
router.get('/', (req, res)=>{
    res.send(`<h1 style='text-align:center; margin-top: 20vh; color:cyan; background: black; '>Array Items : ${arr}</h1>`)
});

router.post('/', (req, res)=>{
    let newVal = (req.body.val)
    let newArr = arr
    newArr.push(newVal)
    arr=  [...newArr];
    res.send(`New item has beed added, New Array Items : ${arr}`)
});


router.delete('/:ind', (req, res)=>{
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


module.exports = router;
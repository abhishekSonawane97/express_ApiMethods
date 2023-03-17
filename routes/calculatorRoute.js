const express = require('express')
const router = express.Router()

// let file = `<h1>Home Page</h1>`;

// router.get('/', (req, res)=>{

//     res.send(file)
// })

// router.get('/about', (req, res)=>{
//     console.log('inside about')
//     res.send('About ')
// });



let x = 100;

router.get('/', (req, res)=>{
    res.send(`<h1 style='text-align:center; margin-top: 20vh; color:cyan; background: black; '>value : ${x}</h1>`)
});

router.put('/', (req, res)=>{
    let newVal = x+(req.body.val);
    res.send(`value : ${newVal}`)
});

router.delete('/', (req, res)=>{
    res.send(`value has been reset : ${x}`)
});

module.exports = router;

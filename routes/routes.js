const express = require('express');

const router = express.Router();

// add new
router.post('/post', (req, res) => {
    data = [ {"id" : 8,"Name" : "Yash", "age" : 22},
    // res.send('api from post Api');
    {"id" : 7,"Name" : "Nitesh", "age" : 23},
    {"id" : 6,"Name" : "Prathmesh", "age" : 21},
    {"id" : 5,"Name" : "Sujit", "age" : 24}
];
    res.send(data);
})

// get all data 
router.get('/getAll', (req, res) => {
    res.send('get all from get API');
})

// update data with id 
router.patch('/updateData:id', (req, res) => {
    // res.send('updated data by id ' + req.params.id);
    data={"id":8, "name":"Yash"};
    console.log(data);
    if(data.id == req.params.id){
        data.name="Samarth";
    }
    console.log(data);
    res.send(data);

})

// for delete with id 
router.delete('/deleteData:id', (req, res) => {
    res.send('deleted data by id' + req.params.id);
})



module.exports = router;
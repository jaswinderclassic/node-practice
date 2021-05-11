var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res){
    res.send("Hello world"+req.params.id);
})

router.post('/',function(req,res){
    res.send("You just called a post method.");
})

module.exports  =   router;
var express = require('express');
var router = express.Router();

// Go to localhost:3000/components
router.get('/components', function(req,res){
  res.render('content');
});

module.exports = router;

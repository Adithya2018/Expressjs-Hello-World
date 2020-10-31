var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');  


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



/* Process POST Form */
var urlencodedParser = bodyParser.urlencoded({ extended: false });  

router.post('/process', urlencodedParser, function (req, res) {  
   /*rewrite this code with your logic */
   /* to access name use 'req.body.name' */
   /* res.send("Implement your logic here"); */
  //  res.send("Checking");
   temp_mark = req.body.mark;
   temp_rollNo = req.body.rno;

   if(temp_mark >= 50){
      res.send("Hai " + temp_rollNo + "!!! You are eligible");
   }
   else{
     res.send("Hai " + temp_rollNo + " Sorry! Try again next time");
   }
  
}); 

module.exports = router;

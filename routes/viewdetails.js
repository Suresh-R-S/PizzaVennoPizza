var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mydb';

router.all('/', function (req, res, next) {
MongoClient.connect(url, function (err, db) {
  console.log("inside mongoclientconnect");
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {

    console.log('Connection established to', url);
    /*var content = req.body;
    console.log("Posted name:",content.aname);
    console.log("Posted pwd:",content.apwd);*/
    var collection = db.collection('orderdetails');

    //if((content.aname=="admin")&&(content.apwd=="admin"))
    //{
        collection.find({d_status:true}).toArray(function (err,result){
    	if(err)
    		console.log(err);
    	else if(result.length) {
    		console.log(result);
            res.send(result);
           
        }
    	else
    		{
                console.log("Not Found!!");
                res.send('nothing');

            }
    });
    //}
    /*else{
        alert("Invalid username or password!!");
    }*/

}
});

});
module.exports = router;
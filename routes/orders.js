var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('data_file.json','utf8',function(err,data){
		if(err){
			console.log(err);
		}
		else{
			var objman = JSON.parse(data);
			// console.log(obj);
			var sendlist = new Array();
			var numberlist = new Array();
			var pointerToValue = objman.results.Orders;
			for (var entry in pointerToValue) {
				console.log(pointerToValue[entry].Price)
				var new_entry = new Object();
				new_entry["price"] = pointerToValue[entry].Price;
				console.log(pointerToValue[entry].Time)
				new_entry["time"] = pointerToValue[entry].Time;
				console.log(pointerToValue[entry].Quantity)
				new_entry["quantity"] = pointerToValue[entry].Quantity
				console.log(pointerToValue[entry].Value)
				new_entry["value"]	= pointerToValue[entry].Value;
				sendlist.push(new_entry);								
	            // sendlist.push(pointerToValue[entry]);
	            // var splitedData = entry.split("-")
	            // console.log(splitedData[0]);
	            // numberlist.push(splitedData[0]);
         	}
			console.log(sendlist);
			// console.log("this is test" + numberlist);
			res.render('orders', { title: 'Express', od : sendlist});
		}
	});
  
});

module.exports = router;

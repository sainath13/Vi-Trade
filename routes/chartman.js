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
			var pointerToValue = objman.results.Charts["Strategy Equity"]["Series"]["Equity"]["Values"];
			for (var entry in pointerToValue) {
	            // if (pointerToValue.hasOwnProperty(entry)) {
	            //    var new_entry = new Object();
	            //    new_entry['equity_value'] = pointerToValue[x];
	            //    console.log(obj[x]);
	            //    sendlist.push(new_entry);
	            // }
	            // console.log(entry);
	            // console.log(pointerToValue[entry].x)
	            sendlist.push(pointerToValue[entry].x );
	            numberlist.push(entry);
         	}
			console.log(sendlist);
			res.render('chartman', { title: 'Express', ed : sendlist , nd : numberlist});
		}
	});
  
});

module.exports = router;

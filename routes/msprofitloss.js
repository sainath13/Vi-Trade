var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('ms.json','utf8',function(err,data){
		if(err){
			console.log(err);
		}
		else{
			var objman = JSON.parse(data);
			// console.log(obj);
			var sendlist = new Array();
			var numberlist = new Array();
			var pointerToValue = objman.results.ProfitLoss;
			var zerolist = new Array();
			for (var entry in pointerToValue) {
				// console.log(pointerToValue[entry]);
	            // if (pointerToValue.hasOwnProperty(entry)) {
	            //    var new_entry = new Object();
	            //    new_entry['equity_value'] = pointerToValue[x];
	            //    console.log(obj[x]);
	            //    sendlist.push(new_entry);
	            // }
	            // console.log(entry);
	            // console.log(pointerToValue[entry].x)
	            sendlist.push(pointerToValue[entry]);
	            var splitedData = entry.split("-")
	            // console.log(splitedData[0]);
	            numberlist.push(splitedData[0]);
	            zerolist.push(0);
         	}
			console.log(sendlist);
			console.log("this is test" + numberlist);
			res.render('msprofitloss', { title: 'Express', ed : sendlist , nd : numberlist , zd : zerolist});
		}
	});
  
});

module.exports = router;

//linking our routes to a series of data sources
var tableDate = require('../data/table-data.js'); //path to file
var waitListData = require('../data/waitinglist-data.js'); //path to file
var path = require('path'); //path to file

module.exports = function(app){

	app.get('/api/tables', function(req, res){
		res.json(tableData);
	});
	app.get('/api/waitlist', function(req, res){
		res.json(waitListData);
	});
	app.post('/api/tables', function(req, res){
		if(tableData.length < 5){
			tableData.push(req.body);
			res.json(true);
		}
		else{
			waitListData.push(req.body);
			res.json(false);
		}
	});
}
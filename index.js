// setup server
var express = require('express');
var app = express();
var low = require('lowdb');
var fs = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db = low(adapter);
var router = express.Router();
var bodyParser = require('body-parser');
var GeoJSON = require('geojson');
var adapter2 = new fs('db2.json');
var db2 = low(adapter2);

app.use(bodyParser.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended: true
}));
router.post('/save_coords', (req, res, next) => {
	console.log('received router  post')
	console.log(req.body);
	res.json({
		test: 'post received'
	});
});
// setup directory used to serve static files
app.use(express.static('public'));
// setup data store
// required data store structure
var bankdata = {
	name: '',
	email: '',
	balance: 0,
	password: '',
	transactions: []
};
db.defaults({
	posts: [],
	bankdata
}).write()
app.get('/account/create/:name/:email/:password', function(req, res) {
	console.log("response code 1")
	var bankdata = {
		"name": req.params.name,
		"email": req.params.email,
		"balance": 0,
		"password": req.params.password,
		"transactions": ["Account Create at " + new Date(Number(new Date()))]
	}
	// return success or failure string
	// add post
	db.get('posts').push(bankdata).write();
	res.send(db.get('posts').value());
});
app.get('/account/login/:email/:password', function(req, res) {
	console.log("response code 2")
	var email_to_check = req.params.email
	var password_to_check = req.params.password
	console.log(email_to_check)
	data_set = db.get('posts').find({
		email: email_to_check
	}).value()
	account_password = data_set.password;
	if (account_password == password_to_check) {
		check_true = true;
		var my_transactions = []
		my_transactions = data_set.transactions;
		my_transactions = my_transactions.push("Account Login at " + new Date(Number(new Date())));
	} else {
		check_true = false;
	}
	res.send(check_true);
});
app.get('/account/get/:email', function(req, res) {
	console.log("response code 3")
});
app.get('/account/deposit/:email/:amount', function(req, res) {
	console.log("response code 4")
	var email_to_check = req.params.email
	var deposit_to_add = 0
	var new_balance = 0
	deposit_to_add += req.params.amount
	data_set = db.get('posts').find({
		email: email_to_check
	}).value()
	new_balance = data_set.balance + Number(deposit_to_add);
	db.get('posts').find({
		email: email_to_check
	}).assign({
		balance: new_balance
	}).write()
	var my_transactions = []
	my_transactions = data_set.transactions;
	my_transactions = my_transactions.push("Deposit Made at " + new Date(Number(new Date())));
	res.send(deposit_to_add);
});
app.get('/account/withdraw/:email/:amount', function(req, res) {
	console.log("response code 5")
	var email_to_check = req.params.email
	var withdraw_to_make = 0
	var new_balance = 0
	withdraw_to_make += req.params.amount
	data_set = db.get('posts').find({
		email: email_to_check
	}).value()
	new_balance = data_set.balance - Number(withdraw_to_make);
	db.get('posts').find({
		email: email_to_check
	}).assign({
		balance: new_balance
	}).write()
	var my_transactions = []
	my_transactions = data_set.transactions;
	my_transactions = my_transactions.push("Withdraw Made at " + new Date(Number(new Date())));
	res.send(withdraw_to_make);
});
app.get('/account/transactions/:email', function(req, res) {
	console.log("response code 6")
	var email_to_check = req.params.email
	// return success or failure string
	// add post
	console.log(email_to_check);
	data_set = db.get('posts').find({
		email: email_to_check
	}).value()
	var data_set_2 = data_set.transactions + '';
	var data_set_3 = data_set_2.split(',');
	var data_set_4 = data_set_3.join(" <br> ");
	res.json(data_set_4);
});
app.get('/account/balance/:email', function(req, res) {
	console.log("response code 7")
	// Return data for all accounts
	var email_to_check = req.params.email
	var balance = 0
	data_set = db.get('posts').find({
		email: email_to_check
	}).value()
	balance = data_set.balance
	res.json('Your balance is: ' + balance);
});
app.get('/account/all', function(req, res) {
	console.log("response code 8")
	// Return data for all accounts
	//res.send(db.get('posts').value());
	res.send(db2.get('features').value())   //changed to db2 for the dog walk excercise
});
app.listen(3000, function() {
	console.log('Running on Port 3000!');
});
// clears the staus Div
app.get('/account/clear', function(req, res) {
	console.log("response code 9")
});
//setting up the new db
var features = []
db2.defaults({
	type: "FeatureCollection",
	features
}).write()
//sending the new data
app.get('/save_coords/:mycoord', function(req, res) {
	console.log("response code 10")
	var mycoord = req.params.mycoord
	db2.get('type').push(mycoord).write();
});
app.post('/save_coords', function(req, res) {
	console.log("response code 11")
	var mycoord = req.body
	var storecoord = mycoord.features[0]
	var restructure = storecoord.geometry.coordinates
	var newarray = []
	newarray.push(restructure)
	storecoord.geometry.coordinates = newarray
	db2.get('features').push(mycoord.features[0]).write();
});
app.get('/get_map', function(req, res) {
	res.json(db2)
});
// adding the properties to the last array in the database
app.post('/save_properties', function(req, res) {
	var myprop = req.body
	console.log("myprop"+myprop.name)
	var size =db2.get('features').size().value()
	size = size-1
	console.log(size)
	var str  = 'features['+size+'].properties'
	console.log("str "+str)
	var results = db2.get(str)
  .assign({name: myprop.name , description: myprop.description, routefee: myprop.routefee})
  .write()
console.log(results)
});
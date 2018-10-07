// setup server
var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// setup directory used to serve static files
app.use(express.static('public')); 

// setup data store
// required data store structure
// YOUR CODE
var bankdata = { 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
};
db.defaults({ posts: [], bankdata}).write()

app.get('/account/create/:name/:email/:password', function (req, res) {
// YOUR CODE
console.log("response code 1")
    // Create account route
    var bankdata = { 
        accounts:[
            {"name"        : req.params.name,
            "email"       : req.params.email,
            "balance"     : '',
            "password"    : req.params.password,
            "transactions": ["Account Create at "+ new Date(Number(new Date()) )] }
        ]
    };
    // return success or failure string
    // add post
    db.get('posts').push(bankdata).write(); 
    res.send(db.get('posts').value());
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    console.log("response code 2")
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null















});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    console.log("response code 3")
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    console.log("response code 4")
    // Deposit amount for email
    // return success or failure string
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    console.log("response code 5")
    // Withdraw amount for email
    // return success or failure string
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    console.log("response code 6")
    // Return all transactions for account
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    console.log("response code 7")
    // Return data for all accounts
});

//added by Tommy
// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on Port 3000!');
});

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
        name        : '',
        email       : '',
        balance     : 0,
        password    : '',
        transactions: []}
;
db.defaults({ posts: [], bankdata}).write()

app.get('/account/create/:name/:email/:password', function (req, res) {
// YOUR CODE
console.log("response code 1")
    // Create account route
    var bankdata = { 
            "name"        : req.params.name,
            "email"       : req.params.email,
            "balance"     : 0,
            "password"    : req.params.password,
            "transactions": ["Account Create at "+ new Date(Number(new Date()) )] }
    // return success or failure string
    // add post
    db.get('posts').push(bankdata).write(); 
    res.send(db.get('posts').value());
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    console.log("response code 2")
    var email_to_check = req.params.email
    var password_to_check = req.params.password
    console.log(email_to_check)
    data_set = db.get('posts').find({ email: email_to_check }).value()
    account_password = data_set.password;
    if (account_password == password_to_check){
        check_true = true;
        var my_transactions = []
        my_transactions = data_set.transactions;
        my_transactions = my_transactions.push("Account Login at " + new Date(Number(new Date())) );

        } else {
            check_true = false;
        }

    res.send(check_true);
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    console.log("response code 3")
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    console.log("response code 4")
    var email_to_check = req.params.email
    var deposit_to_add = 0
    var new_balance = 0
    deposit_to_add += req.params.amount
    data_set = db.get('posts').find({ email: email_to_check }).value()
    new_balance = data_set.balance + Number(deposit_to_add);
    db.get('posts').find({ email: email_to_check }).assign({ balance: new_balance}).write()
    var my_transactions = []
    my_transactions = data_set.transactions;
    my_transactions = my_transactions.push("Deposit Made at " + new Date(Number(new Date())) );
    res.send(deposit_to_add);
});




app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    console.log("response code 5")
    var email_to_check = req.params.email
    var withdraw_to_make = 0
    var new_balance = 0
    withdraw_to_make += req.params.amount
    data_set = db.get('posts').find({ email: email_to_check }).value()
    new_balance = data_set.balance - Number(withdraw_to_make);
    db.get('posts').find({ email: email_to_check }).assign({ balance: new_balance}).write()
    var my_transactions = []
    my_transactions = data_set.transactions;
    my_transactions = my_transactions.push("Withdraw Made at " + new Date(Number(new Date())) );
    res.send(withdraw_to_make);
});


app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    console.log("response code 6")
    
    var email_to_check = req.params.email
    // return success or failure string
    // add post
    console.log(email_to_check);
    data_set = db.get('posts').find({ email: email_to_check }).value()
    //res.send(data_set.transactions);  
    var data_set_2 = data_set.transactions + '';
    var data_set_3 = data_set_2.split(',');
    var data_set_4 = data_set_3.join(" <br> ");
    res.json(data_set_4);

   
});

app.get('/account/balance/:email', function (req, res) {

    // YOUR CODE
    console.log("response code 7")
    // Return data for all accounts
    var email_to_check = req.params.email
    var balance = 0
    data_set = db.get('posts').find({ email: email_to_check }).value()
    balance = data_set.balance
    console.log(balance)
    res.json('Your balance is: ' + balance);

});



app.get('/account/all', function (req, res) {

    // YOUR CODE
    console.log("response code 7")
    // Return data for all accounts
    res.send(db.get('posts').value());
});

//added by Tommy
// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on Port 3000!');
});

// clears the staus Div
app.get('/account/clear', function (req, res) {
    console.log("response code 8")
    
});

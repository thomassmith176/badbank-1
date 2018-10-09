var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
`;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
    <form>
        <div class="form-group">
        <label for="exampleInputName1">Name</label>
        <input type="name" class="form-control" id="exampleInputName1" placeholder="Enter name">
        </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary" onclick="create()">Submit</button>
    </form>
    
</div>
</div> 

`;

ui.login = `
<div class="card text-white bg-secondary mb-3" style = "max-width: 18rem;">
<div class="card-header">Login to Account</div>
<div class="card-body">
    <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-secondary" onclick="login()">Submit</button>
    </form>
</div>
</div >
`;

ui.deposit = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Deposit</div>
<div class="card-body">
<form>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
</div>
<div class="form-group">
    <label for="exampleInputAmount1">Amount</label>
    <input type="amount" class="form-control" id="exampleInputAmount1" placeholder="Amount"">
</div>
<button type="submit" class="btn btn-warning" onclick="deposit()">Submit</button>
</form>
</div>
</div>
`;

ui.withdraw = `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
<div class="card-header">Withdraw</div>
<div class="card-body">
<form>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
</div>
<div class="form-group">
    <label for="exampleInputAmount1">Amount</label>
    <input type="amount" class="form-control" id="exampleInputAmount1" placeholder="Amount"">
</div>
<button type="submit" class="btn btn-success" onclick="withdraw()">Submit</button>
</form>
</div>
</div>
`;

ui.transactions = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
<div class="card-header">Transactions</div>
<div class="card-body">
<form>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
</div>
<button type="submit" class="btn btn-danger" onclick="transactions()">Show Transactions</button>
</form>
</div>
</div>
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<div class="card-header">Show Balance</div>
<div class="card-body">
<form>
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
</div>
<button type="submit" class="btn btn-info" onclick="balance()">Show Balance</button>
</form>
</div>
</div>
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
<div class="card-header">Get All Data</div>
<div class="card-body">
<form>
<div class="form-group">
</div>
<button type="submit" class="btn btn-light" onclick="allData();">Fetch</button>
</form>
</div>
</div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();

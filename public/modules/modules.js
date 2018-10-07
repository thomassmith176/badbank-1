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
<div class="card-header">Header</div>
<div class="card-body">
<h5 class="card-title">Warning card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
`;

ui.withdraw = `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body">
<h5 class="card-title">Success card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
`;

ui.transactions = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body">
<h5 class="card-title">Danger card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
`;

ui.balance = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<div class="card-header">Header</div>
<div class="card-body">
<h5 class="card-title">Info card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
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

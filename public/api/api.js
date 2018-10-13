
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------     
    

    var name = document.getElementById("exampleInputName1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
  
        var status = document.getElementById('status');
        var url = '/account/create/' + name + "/" + email + "/" + password;
        console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    status.innerHTML = 'Your account is set up';
                }           
            });
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
   
        var status = document.getElementById('status');
        
        var url = '/account/login/' + email + "/" + password;
        console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    if (res.body == true){
                        status.innerHTML = "You are logged in";
                        } else {
                            status.innerHTML = "Invalid Password - Not Logged In";
                        }
                }           
            });

}

function deposit() {
    var email = document.getElementById("exampleInputEmail1").value;
    var amount = document.getElementById("exampleInputAmount1").value;  
        var status = document.getElementById('status');
        
        var url = '/account/deposit/' + email + "/" + amount;
        //console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    status.innerHTML = "This amount has been added to your account: " + amount;
                }           
            });
}

function withdraw() {
    var email = document.getElementById("exampleInputEmail1").value;
    var amount = document.getElementById("exampleInputAmount1").value;  
        var status = document.getElementById('status');
        
        var url = '/account/withdraw/' + email + "/" + amount;
        //console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    status.innerHTML = "This amount has been withdrawn from your account: " + amount;
                }           
            });
}

function transactions() {
    var email = document.getElementById("exampleInputEmail1").value; 
        var status = document.getElementById('status');
        
        var url = '/account/transactions/' + email;
        console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    status.innerHTML = JSON.stringify(res.body);
                }           
            });
}

function balance() {
    var status = document.getElementById('status');  
    var email = document.getElementById("exampleInputEmail1").value;     
    var url = '/account/balance/' + email;
    //console.log(url)
    superagent
        .get(url)
        .end(function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
               status.innerHTML = res.body
            }           
        });
}

function allData() {
    // -------------------------------------
    //  YOUR CODE

        var status = document.getElementById('status');      
        var url = '/account/all';
        //console.log(url)
        superagent
            .get(url)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                   status.innerHTML = JSON.stringify(res.body);
                }           
            });

    // -------------------------------------
}

///--------this is a function I wrote to clear the Status Div----
function ClearStatus() {
    // -------------------------------------
    var status = document.getElementById('status');
    var url = '/account/all';
    //console.log(url)
    superagent
        .get(url)
        .end(function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
                status.innerHTML = '';
            }           
        });
    // -------------------------------------
}

        
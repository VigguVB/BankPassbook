const login = () => {
 

    let enteredUser = document.getElementById("user").value;
    let enteredPass = document.getElementById("pass").value;

    let formsubmit = document.getElementById("form");
    formsubmit.addEventListener('submit', (event)=>{
        event.preventDefault();
        
    })
    if (enteredUser === "Vignesh" && enteredPass === "Viggu@123") {
        alert.window("success");
 
    }
    else {
        document.getElementById("access").addEventListener('click', (event)=>{
            event.preventDefault();
        })
        document.getElementById("error").innerHTML="Entered Username or Password is Invalid"
      
    }
    
}
function commit(event){
    let form = document.getElementById("form");
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
    })
 // Create an "li" node:
const nameNode = document.createElement("li");
let name = document.getElementById("transaction").value;

// Create a text node:
const nametextnode = document.createTextNode(name);

// Append the text node to the "li" node:
nameNode.appendChild(nametextnode);

// Append the "li" node to the list:
document.getElementById("myname").appendChild(nameNode);
// debit logic

const debitNode = document.createElement("li");;
let debit = document.getElementById("debit").value;
let debit1 = Number(debit);
const debittextnode = document.createTextNode(debit1);
debitNode.appendChild(debittextnode);
document.getElementById("mydebit").appendChild(debitNode);



// credit logic
const creditNode = document.createElement("li");
let credit = document.getElementById("credit").value;
let credit1 = Number(credit);
const credittextnode = document.createTextNode(credit1);
creditNode.appendChild(credittextnode);
document.getElementById("mycredit").appendChild(creditNode);



// balance logic
const balanceNode = document.createElement("li");

var balance = document.getElementById("bal").innerHTML;
var balance1 = parseFloat(balance)
const balancetextnode = document.createTextNode(balance1+credit1-debit1);
balanceNode.appendChild(balancetextnode);

document.getElementById("mybalance").appendChild(balanceNode);

console.log(typeof(balance))
console.log(typeof(balance1))
console.log(typeof(debit1))
console.log(typeof(credit1))
console.log(typeof(balance))

// document.getElementById("transaction").value = "---";
// document.getElementById("credit").value = b;
// document.getElementById("debit").value = a;
// document.getElementById("balance").value = c;


//  
}
function save(){
    let name = document.getElementById("transaction").value;
    let debit = document.getElementById("debit").value;
let debit1 = Number(debit);
let credit = document.getElementById("credit").value;
let credit1 = Number(credit);
var balance = document.getElementById("bal").innerHTML;
var balance1 = parseFloat(balance)
    var data = {
        transaction: name,
        dr: debit1,
        cr: credit1,
        old: balance1,
        bal: balance1+credit1-debit1,
    }
    var myTimeout = setTimeout(balancevalue, 2000);
    function balancevalue(){
        document.getElementById("bal").innerHTML=data.bal 
    }
    
    
    console.log(data.bal) 
    console.log(data.dr) 
    console.log(data.cr) 
}




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
function commit(){
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
console.log(typeof(debit1))


// credit logic
const creditNode = document.createElement("li");
let credit = document.getElementById("credit").value;
let credit1 = Number(credit);
const credittextnode = document.createTextNode(credit1);
creditNode.appendChild(credittextnode);
document.getElementById("mycredit").appendChild(creditNode);
console.log(typeof(credit1))


// balance logic
const balanceNode = document.createElement("li");

let balance = document.getElementById("balance").value;
let balance1 = Number(balance)
const balancetextnode = document.createTextNode(balance1+credit1-debit1);
balanceNode.appendChild(balancetextnode);
document.getElementById("mybalance").appendChild(balanceNode);

// document.getElementById("transaction").value = null;
// document.getElementById("credit").value = null;
// document.getElementById("debit").value = null;
// let prevbal = numeric(balanceNode);
// document.getElementById("balance").value = prevbal;
// console.log(prevbal)
}



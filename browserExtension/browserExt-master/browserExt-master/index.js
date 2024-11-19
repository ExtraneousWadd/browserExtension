let inputBtn = document.getElementById("input-btn")
let myLeads = [];
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el");

console.log(ulEl);
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl)
    for(let i = 0; i < myLeads.length; i++){
        console.log(JSON.stringify(myLeads[i]));
    }
 })

 ulEl.textContent = JSON.stringify(myLeads);
 for (let i = 0; i < myLeads.length; i++) {
  //  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
     const li = document.createElement(li) 
     li.textContent =  myLeads[i]
     ulEl.append(li) 

 }
 
 


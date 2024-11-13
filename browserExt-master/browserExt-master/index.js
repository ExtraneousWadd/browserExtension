let inputBtn = document.getElementById("input-btn")
let myLeads = [];
let inputEl = document.getElementById("input-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl)
    console.log(myLeads.toString())
 })
 


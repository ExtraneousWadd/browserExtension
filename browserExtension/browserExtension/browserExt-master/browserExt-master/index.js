let inputBtn = document.getElementById("input-btn")
let myLeads = [];
let inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el");

console.log(ulEl);
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    for(let i = 0; i < myLeads.length; i++){
        console.log(myLeads[i]);
    }
    renderLeads();
    inputEl.value = "";
 })


 function renderLeads(){
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href=${myLeads[i]} target=_blank>${myLeads[i]}</a></li>`
     }
     ulEl.innerHTML = listItems;
 }

 
 


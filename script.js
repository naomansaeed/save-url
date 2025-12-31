let myLeads = []

const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list-el");

//attach event listener function to save button
saveBtn.addEventListener('click', () => {

    myLeads.push(inputEl.value)
    for(let i=0; i< myLeads.length; i++) {
        listEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        //console.log(myLeads[i]);
    }
    
})
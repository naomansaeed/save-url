let myLeads = []

const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el")

//attach event listener function to save button
saveBtn.addEventListener('click', () => {

    myLeads.push(inputEl.value)
    console.log(myLeads);
})
let myLeads = []

const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list-el");

//attach event listener function to save button
saveBtn.addEventListener('click', () => {
    if (inputEl.value.trim()) {
        myLeads.push(inputEl.value.trim());
        renderList(); // show the contents of the list.
        inputEl.value = ""; 
    }
    
    //appendList();
    //displayList();
})

// create a variable, listItems to hold all the HTML for the list Items.


function renderList() {
    let listItems = "" ; 
    for(let i=0; i< myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
        //console.log(myLeads[i]);
        
        // create element
        //const li = document.createElement("li");
        //set text content
        //li.textContent = myLeads[i];
        //appennd to the unordered list
        //listEl.append(li);
    }
    listEl.innerHTML = listItems;
}

//function displayList() {
//    listEl.innerHTML = listItems;
//}

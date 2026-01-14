//let myLeads = []


// Turning String to array with JSON.parse
//let myLeads = '["www.awesomelead.com"]'
//myLeads = JSON.parse(myLeads);
//myLeads.push("www.epicLead.com");
//console.log(myLeads);


// Turning an Array into string using JSON.stringify();
//let myLeads = ["www.awesomelead.com"];
//myLeads = JSON.stringify(myLeads[0]);
//console.log(myLeads);

const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list-el");
const deleteBtn = document.getElementById("delete-btn");

// Try to show previously saved leads from local storage
let myLeads = [] //JSON.parse(localStorage.getItem("myLeads")) || [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (!Boolean(leadsFromLocalStorage)){
    console.log("Nothing Found in local storage.");
}
else {
    myLeads = leadsFromLocalStorage;
    renderList(myLeads);
}

//attach event listener function to save button
saveBtn.addEventListener('click', () => {
    if (inputEl.value.trim()) {
        myLeads.push(inputEl.value.trim());

        

        renderList(myLeads); // show the contents of the list.

        // Save the myLeads array to localStorage
        localStorage.setItem("myLeads", JSON.stringify(myLeads));

        
        inputEl.value = ""; 
    }
    
    //appendList();
    //displayList();
});

//Handle the double click event from delete button
deleteBtn.addEventListener('dblclick',() => {
    //clear local storage
    localStorage.clear();
    //localStorage.removeItem('myLeads');

    // set the value of myLeads to empty array;
    myLeads = [];

    // clean up the list shown in the DOM
    //listEl.innerHTML = " ";
    renderList(myLeads);
})

// create a variable, listItems to hold all the HTML for the list Items.


function renderList(leads) {
    let listItems = "" ; 
    for(let i=0; i< leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "' >" + myLeads[i] + "</a></li>"
        //console.log(myLeads[i]);
        
        // create element
        //const li = document.createElement("li");
        //set text content
        //li.textContent = myLeads[i];
        //appennd to the unordered list
        //listEl.append(li);

        listItems += `<li>
                            <a target='_blank' href='${leads[i]}' >
                            ${leads[i]}
                            </a>
                      </li>`
    }
    listEl.innerHTML = listItems;
}

//function displayList() {
//    listEl.innerHTML = listItems;
//}

console.log("connected");
const tbody = document.querySelector('.data-entry');
const addRowBtn = document.querySelector('form');
const fullName = document.querySelector('#name');
const errMsg = document.querySelector('.error-msg');


const resetForm = () => {
    fullName.value = "";
}

const addRow = (e) => {
    e.preventDefault();
    if (!(fullName.value)) {
        errMsg.textContent = "Empty Input field(s)";
        setTimeout(() => {
            errMsg.textContent = "";
        }, 1000)
    } else {
        const newElm = document.createElement('tr');
        newElm.setAttribute("class", "row");
        newElm.innerHTML = `
        <td>${fullName.value}</td>
        <td class="action-btn"><button id="remove-btn">\u{1F5D1}</button></td>
        <td class="action-btn"><button id="edit-btn">\u{1F58A}</button></td>
        `;
        tbody.appendChild(newElm);
        resetForm();
    }
}

const removeRow = (e) => {
    if (e.target.id === 'remove-btn')
        e.target.parentElement.parentElement.remove();
}
const editRow = (e) => {
    // if (e.target.id === 'edit-btn')
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");
    var listItem = this.parentNode;

    var editInput = listItem.querySelector("#edit-btn");
    // var label = listItem.querySelector("label");
    // var containsClass = listItem.classList.contains("editMode");
    //If class of the parent is .editmode
    // if (containsClass) {

    //     //switch to .editmode
    //     //label becomes the inputs value.
    //     label.innerText = editInput.value;
    // } else {
    //     editInput.value = label.innerText;
    // }

    // //toggle .editmode on the parent.
    // listItem.classList.toggle("editMode");
}
addRowBtn.addEventListener('submit', addRow);
tbody.addEventListener('click', removeRow);
tbody.addEventListener('click', editRow);
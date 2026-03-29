// DETAILS BUTTON
function viewDetails() {
    alert("Viewing full employee details");
}

// EDIT BUTTON
function editContact() {
    let confirmEdit = confirm("Are you sure you want to edit this contact?");
    if(confirmEdit){
        alert("You can now edit this employee's details ");
    } else {
        alert("Edit cancelled");
    }
}

// DELETE BUTTON
function deleteContact() {
    let confirmDelete = confirm("Are you sure you want to delete this contact?");
    if(confirmDelete){
        alert("Contact deleted ");
    } else {
        alert("Delete cancelled ");
    }
}
// Function to enable or disable edit mode for all fields of an entity
function toggleEdit(button) {
    const entityDiv = button.parentElement;
    const fields = entityDiv.querySelectorAll('.entity-brand, .entity-model, .entity-year');
    const editInputs = entityDiv.querySelectorAll('.edit-input');

    if (button.textContent === 'Edit') { // Enter edit mode
        fields.forEach(field => {
            field.style.display = 'none';
        });
        editInputs.forEach(input => {
            input.style.display = 'inline';
        });
        button.textContent = 'Save';
    } else { // Save changes
        fields.forEach((field, index) => {
            field.textContent = editInputs[index].value.trim();
            field.style.display = 'inline';
        });
        editInputs.forEach(input => {
            input.style.display = 'none';
        });
        button.textContent = 'Edit';
    }
}

// Your existing JavaScript code continues here...

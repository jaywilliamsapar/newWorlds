var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["brandName"] = document.getElementById("brandName").value;
    formData["speci"] = document.getElementById("speci").value;
    formData["yearModel"] = document.getElementById("yearModel").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("emperado").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.brandName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.speci;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.yearModel;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("brandName").value = "";
    document.getElementById("speci").value = "";
    document.getElementById("yearModel").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("brandName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("speci").value = selectedRow.cells[1].innerHTML;
    document.getElementById("yearModel").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.brandName;
    selectedRow.cells[1].innerHTML = formData.speci;
    selectedRow.cells[2].innerHTML = formData.yearModel;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("emperado").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("brandName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

var person = {
    name: `Freddy`,
    age: 26,
    skinTone: `dark choco`,
    ave: '92.55%',
    skill: 'technical',

    persona: function () {
        console.log(this.skinTone);
    },
}

person.persona();
console.log(this.person)
console.log(person);


const dog = {
    name: 'Duke',
    bark(sound) {
        return `${this.name} say ${sound}`
    },

}

dog.bark('wooof woof');

console.log(dog);
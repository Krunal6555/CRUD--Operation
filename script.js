var selectedRow = null;
var saveEdit = 0;
  function onFormSubmit() {
    event.preventDefault();
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
    document.getElementById("btnadduser").style.display = none;
}

function readFormData() {
    var formData = {};
    formData.fullName = document.getElementById("fullName").value;
    formData.number = document.getElementById("number").value;
    formData.salary = document.getElementById("salary").value;
    formData.empid = document.getElementById("empid").value;
   
    return formData;
}

function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.number;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.empid;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<i class="fas fa-edit btnedit" id="saveUser" onclick="onEdit(this)"></i>`
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<i class="fas fa-trash btndelete"  onclick="onDelete(this)"></i>`
   
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("number").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("empid").value = "";
   
    selectedRow = null;
}

function onEdit(td) {
   
    selectedRow = td.parentElement.parentElement;
// td.parentElement = get info from td. 
//td.parentElement.parentElement = get info from tr.

    // let saveUser= document.getElementById("saveUser");
    // let btnsave = document.getElementById("btnsave");
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("number").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("empid").value = selectedRow.cells[3].innerHTML;
    
    // saveUser.style.display="block";
    // btnsave.style.display= "block";
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.number;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.empid;
   
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


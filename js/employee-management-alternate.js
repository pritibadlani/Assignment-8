/*eslint-env browser*/

var btnDel = "<button class='btnDel' onclick='deleteRow(this)'>Delete</button>";

var employeeList = [];
employeeList[0] = ["Sally Smith", "QA Engineer", 5555, btnDel];
employeeList[1] = ["Fred Franklin", "VP of Sales", 2132, btnDel];
employeeList[2] = ["John Strothers", "Web Developer", 1233, btnDel];
employeeList[3] = ["Sue Sallison", "VP of Accounting", 4323, btnDel];
employeeList[4] = ["Amanda Hugginkiss", "Admin Assistant", 3543, btnDel];

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var showEmployees = function () {
    "use strict";
    var row, col, tableString = "";
    
    $("qtyEmployee").innerHTML = "Showing " + employeeList.length + " employees";
    
    for (row = 0; row < employeeList.length; row += 1) {
        tableString += "<tr>";
        for (col = 0; col < 4; col += 1) {
            tableString += "<td>" + employeeList[row][col] + "</td>";
        }
        tableString += "</tr>";
    }
    $("tblBody").innerHTML = tableString;
};

var addEmployee = function () {
    "use strict";
    var name, title, extension, employee = [];
    
    // GRAB VALUES OF TEXT BOXES
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    
    // BASIC VALIDATION
    if (name === "") {
        $("requireName").innerHTML = "This field is required!";
        return;
    } else {
        $("requireName").innerHTML = "";
        employee.push(name);
    }
    
    if (title === "") {
        $("requireTitle").innerHTML = "This field is required!";
        return;
    } else {
        $("requireTitle").innerHTML = "";
        employee.push(title);
    }
    
    if (extension === "") {
        $("requireExtension").innerHTML = "This field is required!";
        return;
    } else if (isNaN(extension) || extension.length !== 4) {
        $("requireExtension").innerHTML = "Extension must be a 4-digit value!";
        return;
    } else {
        $("requireExtension").innerHTML = "";
        employee.push(extension);
        btnDel = "<button class='btnDel' onclick='deleteRow(this)'>Delete</button>";
        employee.push(btnDel);
    }
    
    if (employee.length > 0) {
        employeeList.push(employee);
    }
    
    showEmployees();
    
    $("regForm").reset();
};

function deleteRow(r) {
    "use strict";
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

window.addEventListener("load", function () {
    "use strict";
    // SHOW ALL EMPLOYEES
    showEmployees();
    
    // ADD EVENT LISTENER TO ADD BUTTON
    $("add").addEventListener("click", addEmployee);
    
    // ADD EVENT HANDLER TO THE BODY OF THE TABLE FOR BUBBLING
//    $("tblBody").addEventListener("click", function (e) {
//        // IF USER CLICKS THE DELETE BUTTON
//        if (e.target.textContent.match(/Delete/)) {
//            var i, index, tblBody, btnElements;
//            
//            tblBody = $("tblBody");
//            btnElements = tblBody.getElementsByTagName("button");
//            for (i = 0; i < btnElements.length; i += 1) {
//                if (e.target.className === btnElements[i].className) {
//                    index = i;
//                }
//            }
//            // DELETE THE EMPLOYEE FOR THE CLICKED ROW
//            delEmployee(index);
//        }
//    });

//    var btnDel1 = document.getElementsByClassName("btnDel");
//    for (var i = 0; i < btnDel1.length; i++) {
//        btnDel1[i].addEventListener("click", deleteRow, false);
//    }
//    
});


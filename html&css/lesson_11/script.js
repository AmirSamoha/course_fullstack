document.getElementById("sub").onclick= function() {
    localStorage.setItem("fname", document.getElementById("fname").value);
    localStorage.setItem("lname", document.getElementById("lname").value);
    localStorage.setItem("password", document.getElementById("pass").value);
 

}
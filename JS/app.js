var firstname = document.getElementById("firstName");
var lastname = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");

function signup(){
    var user = {
        firstnameref: firstname.value,
        lastNameref: lastName.value,
        emailref: email.value,
        passwordref: password.value
    }

    console.log('user',user);
}
const passwordToggle = document.getElementById("passwordToggle");
const passwordInput = document.getElementById("passwordInput");

passwordToggle.addEventListener("click", function() {    
    if (passwordToggle.src.includes("show")){
        passwordToggle.src = "../images/hide.svg";
        passwordInput.type = "text";
    } else {
        passwordToggle.src = "../images/show.svg";
        passwordInput.type = "password";
    }
});

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




  // function signUp(){

  //   var email = document.getElementById("email");
  //   var password = document.getElementById("passwordInput");

  //   const promise = auth.createUserwithEmailAndPassword(email.Value, password.Value);
  //   promise.catch(e => alert(e.message));
  //   alert("signed up");
  // }
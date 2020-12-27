// const passwordToggle = document.getElementById("passwordToggle");
// const passwordInput = document.getElementById("passwordInput");

// passwordToggle.addEventListener("click", function() {    
//     if (passwordToggle.src.includes("show")){
//         passwordToggle.src = "/auth-files/media/images/icons/hide.svg";
//         passwordInput.type = "text";
//     } else {
//         passwordToggle.src = "/auth-files/media/images/icons/show.svg";
//         passwordInput.type = "password";
//     }
// });






<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC2dSewkenEXo-ErN_HFT2CH9pp_VVzMRE",
    authDomain: "sakshya-ecc71.firebaseapp.com",
    projectId: "sakshya-ecc71",
    storageBucket: "sakshya-ecc71.appspot.com",
    messagingSenderId: "942439436828",
    appId: "1:942439436828:web:79b70eb608adb4683f05d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
  
  const auth = firebase.auth();

  function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("passwordInput");

    const promise = auth.createUserwithEmailAndPassword(email.Value, password.Value);
    promise.catch(e => alert(e.message));
    alert("signed up");
  }
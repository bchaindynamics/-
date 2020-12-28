

// function signup(){
//     var user = {
//         firstnameref: firstname.value,
//         lastNameref: lastName.value,
//         emailref: email.value,
//         passwordref: password.value
//     }

//     console.log('user',user);
// }


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAXbhwqpsFQs1EFt23wr-PRqIjH4dlT_fU",
    authDomain: "sakshya-906f0.firebaseapp.com",
    projectId: "sakshya-906f0",
    storageBucket: "sakshya-906f0.appspot.com",
    messagingSenderId: "433984443244",
    appId: "1:433984443244:web:07b24ed4238301c44fd949"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // get elements 

  const firstname = document.getElementById("firstName");
  const lastname = document.getElementById("lastName");
  const email = document.getElementById("lemail");
  const password = document.getElementById("passwordInput");

  //Add login event 
  btnlogin.addEventListener('click',e => {

    //Get element and pass 

    const email = lemail.value;
    const pass = passwordInput.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e =>console.log.(e.message));

  });

  
  // Add signup event 
  btnsignup.addEventListener('click',e => {

    //Get element and pass 

    const email = lemail.value;
    const pass = passwordInput.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e =>console.log.(e.message));

  });

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
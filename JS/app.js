

// function signup(){
//     var user = {
//         firstnameref: firstname.value,
//         lastNameref: lastName.value,
//         emailref: email.value,
//         passwordref: password.value
//     }

//     console.log('user',user);
// }

(function()
{
  


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAXbhwqpsFQs1EFt23wr-PRqIjH4dlT_fU",
  authDomain: "sakshya-906f0.firebaseapp.com",
  databaseURL: "https://sakshya-906f0-default-rtdb.firebaseio.com",
  projectId: "sakshya-906f0",
  storageBucket: "sakshya-906f0.appspot.com",
  messagingSenderId: "433984443244",
  appId: "1:433984443244:web:07b24ed4238301c44fd949"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
  // get elements 

  const firstname = document.getElementById("firstName");
  const lastname = document.getElementById("lastName");
  const lemail = document.getElementById("email");
  const password = document.getElementById("password");
  const btnlogin = document.getElementById("btnlogin");
  const btnsignup = document.getElementById("btnsignup");

  
  //Add login event 
  // btnlogin.addEventListener('click', e => {

  //   // Get element and pass 

  //   const email = lemail.value;
  //   const pass = passwordInput.value;
  //   const auth = firebase.auth();

  //   const promise = auth.signInWithEmailAndPassword(email, pass);
  //   promise.catch(e => console.log(e.message));

  // });

  
  // Add signup event 
  btnsignup.addEventListener('click',e => {
    console.log(lastname.value);
    e.preventDefault();
    //Get element and pass 

    const email = lemail.value;
    const pass = password.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e =>console.log(e.message));

  });


// Add a real time listner 
      const auth = firebase.auth();
  firebase.auth().onAuthStateChanged( firebaseUser => {
        if (firebaseUser) 
        {
          console.log(firebaseUser);
        }
          else
          {
            console.log('not loged in');
          }
    });


  

}());
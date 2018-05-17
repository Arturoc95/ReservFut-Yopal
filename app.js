function registrar(){

	var userEmail = document.getElementById("usuarioo").value;
	var userPass = document.getElementById("passwordd").value;
  
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage); 
	 
  
	  // ...
    });
}
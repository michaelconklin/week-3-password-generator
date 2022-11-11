document.querySelector('#genpass').addEventListener("click", function() {
  var length = prompt("")

  if(length < 8) {
    alert("Must be at least 8 characters")
    return;
  } 

  if(length > 128) {
    alert("must be less than or equal to 128 charaters")
  }

  var useLowercase = confirm('Use lowercase')
  var useUppercase = confirm('Use Uppercase')
});






// starting fresh code here
// prompt for critera
  // min 8 character
  // max 128 character
// confirm add lowercase
// confirm add uppercase
// 

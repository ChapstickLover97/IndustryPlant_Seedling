const showLoginStuff = document.getElementById("login-btn");
const userLogin = document.getElementById("user-login");
const passwordLogin = document.getElementById("password-login");
const submitBtn = document.getElementById("submit-btn");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const showSignupStuff = document.getElementById("signup-btn");
const userSignup = document.getElementById("user-signup");
const passwordSignup = document.getElementById("password-signup");

showLoginStuff.addEventListener("click", function() {
    userLogin.style.display = "block";
    passwordLogin.style.display = "block";
    submitBtn.style.display = "block";
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
});

showSignupStuff.addEventListener("click", function() {
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    userSignup.style.display = "block";
    passwordSignup.style.display = "block";
    submitBtn.style.display = "block";
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
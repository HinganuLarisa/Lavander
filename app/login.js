"use strict"
//Show and hide the password
const forms =document.querySelector(".forms"),
      pwShowhide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowhide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll("#password");
        pwFields.forEach(password => {
            if(password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        });
    });
});


// Show  registration or login
links.forEach (link => {
    link.addEventListener("click",e => {
        e.preventDefault();
        forms.classList.toggle("show-registration");
    })
})



function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

     // Validate email
    if (email.trim() === "") {
        emailError.textContent = "Completați adresa de e-mail."

      } else if (!isValidEmail(email)) {
        emailError.textContent = "Adresă de e-mail invalidă.";
        emailError.style.color = "#dbc6c0";
      }
    
    // Validate password
    if (password.trim() === "") {
        passwordError.textContent = "Completați parola.";

      } else if (password.trim().length < 6) {
        passwordError.textContent = "Parola trebuie să conțină cel puțin 6 caractere.";
        passwordError.style.color = "#dbc6c0";
      } else {
        passwordError.textContent = ""; // Clear the error message
      }
    if (email.trim() === "" || !isValidEmail(email) || password.trim() === "") {
     } else {
         // Clear input values
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    
        // Navigate to a new page
        window.location.href = "/index.html";
    
        return true; // Allow form submission
          }
        }

  function isValidEmail(email) {
    // Expression to validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


//Validate registration
function validateRegistrationForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email-reg").value;
    var password = document.getElementById("password-reg").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var nameError = document.querySelector(".username-error-message");
    var emailError = document.getElementById("emailErrorReg");
    var passwordError = document.getElementById("passwordErrorReg");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    // Validate name
    if (name.trim().length < 5) {
      nameError.textContent = "Numele trebuie să conțină cel puțin 5 caractere.";
    } else {
      nameError.textContent = "";
    }

    // Validate email
    if (email.trim() === "") {
      emailError.textContent = "Completați adresa de e-mail.";
    } else if (!isValidEmail(email)) {
    } else {
      emailError.textContent = "";
    }

    // Validate password
    if (password.length < 6) {
      passwordError.textContent = "Parola trebuie să conțină cel puțin 6 caractere.";
    } else {
      passwordError.textContent = "";
    }

    // Validate confirm password
    if (confirmPassword.trim() !== password.trim()) {
      confirmPasswordError.textContent = "Parola trebuie să coincidă.";
    } else {
      confirmPasswordError.textContent = "";
    }

    if (
      name.trim().length < 5 ||
      email.trim() === "" ||
      !isValidEmail(email) ||
      password.trim().length < 6 ||
      confirmPassword.trim() !== password.trim()
    ) {
      return false; // Prevent form submission
    } else {
      window.location.href = "/index.html"; // Redirect to a new page
      return true;

  }
}

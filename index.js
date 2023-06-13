"use strict"

//Validation Form Newseltter
function validateForm() {
  var email = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var text = document.getElementsByClassName('text')[0];
  if (emailRegex.test(email)) {
    text.innerHTML = "Adresa ta de email este validă.";
    text.style.color = "#9a8c98";
    text.innerHTML = " ";
  } else {
    text.innerHTML = "Adaugă o adresă de email validă.";
    text.style.color = "#daa6d1";
    
  }
}

//Popup newseltter
let btnFormNewseltter = document.getElementsByClassName('btn-form')[0];
btnFormNewseltter.addEventListener("click", e => {
  e.preventDefault();
  let emailNew = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let email = document.getElementById('email').value;

  if (emailNew.test(email)) {
    executePopup();
    // Set a timer to remove the popup after 3 seconds
    setTimeout(() => {
      removePopup();
      document.getElementById("email").value = ""
    }, 2000);
  }
});

const executePopup = () => {
  const popupNewseltter = document.querySelector(".newseltter-popup");
  popupNewseltter.classList.add('show');
};

const removePopup = () => {
  const popupNewseltter = document.querySelector(".newseltter-popup");
  popupNewseltter.classList.remove('show');
};

//Choose city
const cityButton = document.getElementById('city-button');
const cityList = document.getElementById('city-list');
const closeButton = document.getElementById('close-button');

// Hide the city list and close button on page load
cityList.style.display = 'none';
closeButton.style.display = 'none';
cityButton.style.display = 'block';

// Add an event listener to the button that shows the city list and hides the button and shows the close button
cityButton.addEventListener('click', function() {
  cityList.style.display = 'block';
  cityButton.style.display = 'none';
  closeButton.style.display = 'block';
});

// Add an event listener to the close button that hides the city list and shows the first button
closeButton.addEventListener('click', function() {
  cityList.style.display = 'none';
  closeButton.style.display = 'none';
  cityButton.style.display = 'block';
});


//Cookies
const cookieBox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".button");

  const executeCodes = () => {
    cookieBox.classList.add("show");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        cookieBox.classList.remove("show");
      })
    })

  };
  window.addEventListener("load", executeCodes);

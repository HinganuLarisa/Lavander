"use strict"

function validateContact() {
  let name = document.getElementById('name');
  let nameError = document.getElementById('nameError');
  let email = document.getElementById('email');
  let emailError = document.getElementById('emailError');
  let subject = document.getElementById('subject');
  let subjectError = document.getElementById('subjectError');
  let message = document.getElementById('message');
  let messageError = document.getElementById('messageError');
  let btnContact = document.querySelector(".btn-contact");
  let popupContact = document.getElementById('popupContact')


 // Clear any previous error messages
 nameError.textContent = '';
 emailError.textContent = '';
 subjectError.textContent = '';
 messageError.textContent = '';

 // Validate name field
 if (name.value.trim() === '') {
   nameError.textContent = 'Numele este obligatoriu';
   name.focus();
   return false;
 }

 // Validate email field
 if (email.value.trim() === '') {
   emailError.textContent = 'E-mail este obligatoriu';
   email.focus();
   return false;
 }

 // Regular expression to validate email format
 const emailRegex = /^\S+@\S+\.\S+$/;

 if (!emailRegex.test(email.value.trim())) {
   emailError.textContent = 'Adresa de e-mail este invalida';
   email.focus();
   return false;
 }

 // Validate subject field
 if (subject.value.trim() === '') {
   subjectError.textContent = 'Subiectul este obligatoriu.';
   subject.focus();
   return false;
 }

 // Validate message field
 if (message.value.trim() === '') {
   messageError.textContent = 'Mesajul este obligatoriu.';
   message.focus();
   return false;
 }

 executePopup();

  // Set a timer to remove the popup after 3 seconds
  setTimeout(() => {
    removePopup();
    name.value = '';
    email.value = ''; 
    subject.value = '';
    message.value = '';

  }, 3000);

  return true;
}

const executePopup = () => {
  const popupContact = document.querySelector(".popupContact");
  popupContact.classList.add('show');
  console.log(popupContact);
};

const removePopup = () => {
  const popupContact = document.querySelector(".popupContact");
  popupContact.classList.remove('show');
};



//The map for the city Iasi
const apiKey = 'VBKcxFJGnheURTbvL2X7llDNYT704qt3';
const address = 'Str Neculau nr 3, Iasi';

const getMapIasi = `https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${encodeURIComponent(address)}`;

// Retrieve the latitude and longitude for the address
fetch(getMapIasi)
  .then(response => response.json())
  .then(data => {
    const results = data.results[0].locations;
    if (results.length > 0) {
      const location = results[0].latLng;
      const latitude = location.lat;
      const longitude = location.lng;

      // Initialize the map with the location
      L.mapquest.key = apiKey;
      const map = L.mapquest.map('map', {
        center: [latitude, longitude],
        layers: L.mapquest.tileLayer('map'),
        zoom: 10
      });

      const marker = L.marker([latitude, longitude], {
        icon: L.mapquest.icons.marker({
          primaryColor: '#FF0000' // Set the marker color to red
        })
      }).addTo(map);

      // Bind a popup to the marker
      marker.bindPopup('Str Neculau nr 3');

      // Open the popup on mouseover
      marker.on('mouseover', function () {
        this.openPopup();
      });

      // Close the popup on mouseout
      marker.on('mouseout', function () {
        this.closePopup();
      });
    }
  });

//The map for the city Brasov

const addressBrasov = 'Strada Toamnei 8, Brasov';
const getMapBrasov = `https://www.mapquestapi.com/geocoding/v1/address?key=${apiKey}&location=${encodeURIComponent(addressBrasov)}`;

fetch(getMapBrasov)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const results = data.results[0].locations;
    if (results.length > 0) {
      const location = results[0].latLng;
      const latitude = location.lat;
      const longitude = location.lng;

      // Initialize the map with the location
      L.mapquest.key = apiKey;
      const mapBrasov = L.mapquest.map('map-brasov', {
        center: [latitude, longitude],
        layers: L.mapquest.tileLayer('map'),
        zoom: 10
      });

      const marker = L.marker([latitude, longitude], {
        icon: L.mapquest.icons.marker({
          primaryColor: '#FF0000' // Set the marker color to red
        })
      }).addTo(mapBrasov);

      // Bind a popup to the marker
      marker.bindPopup('Strada Toamnei 8');

      // Open the popup on mouseover
      marker.on('mouseover', function () {
        this.openPopup();
      });

      // Close the popup on mouseout
      marker.on('mouseout', function () {
        this.closePopup();
      });
    }
  });


function showBoxes() {
  var firstBox = document.getElementById("firstBox");
  var secondBox = document.getElementById("secondBox");

  if (firstBox.style.display === "none") {
    firstBox.style.display = "block";
    secondBox.style.display = "block";
  } else {
    firstBox.style.display = "none";
    secondBox.style.display = "none";
  }
}

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


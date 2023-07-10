const favoriteBlocks = document.querySelectorAll('.favorite-block');

// Attach event listeners to each block
favoriteBlocks.forEach((block) => {
  const heading = block.querySelector('.favorite-heading');
  const content = block.querySelector('.favorite-content');

  // Hide the content initially
  content.style.display = 'none';

  // Show the content on mouseover
  block.addEventListener('mouseover', () => {
    content.style.display = 'block';
  });

  // Hide the content on mouseout
  block.addEventListener('mouseout', () => {
    content.style.display = 'none';
  });
});

const colorButton = document.getElementById('color');
const placeButton = document.getElementById('place');
const ritualButton = document.getElementById('ritual');

// Add click event listeners to the buttons
colorButton.addEventListener('click', function() {
	alert("My favorite color is blue.");
});

placeButton.addEventListener('click', function() {
	alert("My favorite place is the beach.");
});

ritualButton.addEventListener('click', function() {
	alert("My favorite ritual is sleeping.");
});


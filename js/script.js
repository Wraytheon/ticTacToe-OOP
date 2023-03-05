const board = document.querySelector(".board");
const topL = document.getElementById("top-left-marker");
const topC = document.getElementById("top-center-marker");
const topR = document.getElementById("top-right-marker");
const midL = document.getElementById("mid-left-marker");
const midC = document.getElementById("mid-center-marker");
const midR = document.getElementById("mid-right-marker");
const bottomL = document.getElementById("bottom-left-marker");
const bottomC = document.getElementById("bottom-center-marker");
const bottomR = document.getElementById("bottom-right-marker");
const cell = document.getElementsByClassName("cell");


// Get all cells within the board
const cells = document.querySelectorAll('.cell');

// Add click event listener to the board
document.querySelector('.board').addEventListener('click', function(event) {
  // Check if the clicked element is a cell
  if (!event.target.classList.contains('cell')) return;
  
  // Get the ID of the clicked cell
  const clickedCellId = event.target.id;
  
  // Remove the 'hide' class from the marker within the clicked cell, if it exists
  const clickedCellMarker = document.querySelector(`#${clickedCellId}-marker`);
  if (clickedCellMarker && clickedCellMarker.classList.contains('hide')) {
    clickedCellMarker.classList.remove('hide');
  }
});

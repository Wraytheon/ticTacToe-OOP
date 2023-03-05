const board = document.querySelector(".board");

let markerSymbol = "X"; // Initialize the markerSymbol to "X"

// Get all cells within the board
const cells = document.querySelectorAll('.cell');

// Add click event listener to the board
document.querySelector('.board').addEventListener('click', function(event) {
  // Check if the clicked element is a cell
  if (!event.target.classList.contains('cell')) return;

  // Get the ID of the clicked cell
  const clickedCellId = event.target.id;
  // Get the class of the clicked cell
  const clickedCellMarker = document.querySelector(`#${clickedCellId}-marker`);

  // Display the correct marker (X or O)
  document.querySelector(`#${clickedCellId}-marker`).textContent = markerSymbol;

  // Remove the 'hide' class from the marker within the clicked cell, if it exists
  if (clickedCellMarker && clickedCellMarker.classList.contains('hide')) {
    clickedCellMarker.classList.remove('hide');
  }

  // Set the markerSymbol to "X" on odd clicks and "O" on even clicks
  if (markerSymbol === "X") {
    markerSymbol = "O";
  } else {
    markerSymbol = "X";
  }
});





// const topL = document.getElementById("top-left-marker");
// const topC = document.getElementById("top-center-marker");
// const topR = document.getElementById("top-right-marker");
// const midL = document.getElementById("mid-left-marker");
// const midC = document.getElementById("mid-center-marker");
// const midR = document.getElementById("mid-right-marker");
// const bottomL = document.getElementById("bottom-left-marker");
// const bottomC = document.getElementById("bottom-center-marker");
// const bottomR = document.getElementById("bottom-right-marker");

// Get the note container and buttons
const noteArea = document.getElementById("noteArea");
const deleteButton = document.getElementById("deleteButton");
const bulletButton = document.getElementById("bulletButton");

// Load the saved note from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  noteArea.innerHTML = localStorage.getItem("notes") || "";
});

// Save the note to localStorage when typing
noteArea.addEventListener("input", () => {
  localStorage.setItem("notes", noteArea.innerHTML);
});

// Clear all notes when delete button is clicked
deleteButton.addEventListener("click", () => {
  noteArea.innerHTML = ""; // Clear the note area
  localStorage.removeItem("notes"); // Remove notes from local storage
});

// Function to insert a bullet point
function addBulletPoint() {
  noteArea.focus(); // Focus on the note area
  document.execCommand("insertHTML", false, "<br>• &nbsp;"); // Insert bullet and space
}

// Add bullet point when button is clicked
bulletButton.addEventListener("click", addBulletPoint);

// Add bullet point with Alt + Shift + B
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.shiftKey && event.key === "B") {
    event.preventDefault(); // Prevent any default behavior
    addBulletPoint(); // Call the bullet point function
  }
});

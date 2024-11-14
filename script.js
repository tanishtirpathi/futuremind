// Get the note and to-do containers and buttons
const noteArea = document.getElementById("noteArea");
const deleteButton = document.getElementById("deleteButton");
const bulletButton = document.getElementById("bulletButton");
const checklistButton = document.getElementById("checklistButton");
// Load the saved note and to-do list from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  noteArea.innerHTML = localStorage.getItem("notes") || "";
  todoList.innerHTML = localStorage.getItem("todos") || "";
  addChecklistEventListeners();
});

// Save the note to localStorage when typing
noteArea.addEventListener("input", () => {
  localStorage.setItem("notes", noteArea.innerHTML);
});

// Clear all notes when delete button is clicked
deleteButton.addEventListener("click", () => {
  noteArea.innerHTML = "";
  localStorage.removeItem("notes");
});

// Function to insert a bullet point
function addBulletPoint() {
  noteArea.focus();
  document.execCommand("insertHTML", false, "<br>• &nbsp;");
}

// Add bullet point when button is clicked
bulletButton.addEventListener("click", addBulletPoint);

// Add bullet point with Alt + Shift + B
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.shiftKey && event.key === "B") {
    event.preventDefault();
    addBulletPoint();
  }
});

// Function to insert a checklist item
function addChecklist() {
  noteArea.focus();
  document.execCommand(
    "insertHTML",
    false,
    '<br><input type="checkbox" class="note-checkbox"> &nbsp;'
  );
}

// Add checklist when button is clicked
checklistButton.addEventListener("click", addChecklist);

// Add checklist with Alt + Shift + C
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.shiftKey && event.key === "C") {
    event.preventDefault();
    addChecklist();
  }
});
noteArea.addEventListener("click", () => {
  addChecklistEventListeners(); // Re-attach event listeners for new checklists
});

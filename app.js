// Toggle visibility
function toggle(id) {
  const el = document.getElementById(id);
  el.classList.toggle('hidden');
}

// Display greeting
function greet() {
  const name = document.getElementById('nameInput').value.trim();
  const output = name ? `Hello, ${name}!` : "You didn't type anything.";
  document.getElementById('greeting').textContent = output;
}

// Add list item dynamically
function addItem() {
  const val = document.getElementById('itemInput').value.trim();
  if (val !== "") {
    const li = document.createElement('li');
    li.textContent = val;
    document.getElementById('itemList').appendChild(li);
    document.getElementById('itemInput').value = "";
  }
}

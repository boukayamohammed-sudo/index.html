const checkboxes = document.querySelectorAll(".item-checkbox");
const counter = document.getElementById("counter");

function updateCounter() {
  let selectedCount = 0;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedCount++;
    }
  });
  counter.innerText = selectedCount;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", updateCounter);
});

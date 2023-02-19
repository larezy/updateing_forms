// 1. Select Elements
// querySelector
const list = document.querySelector("ul");
// const firstStudent = document.querySelectorAll(".first");
const btnAdd = document.getElementById("add-student");
const inputName = document.getElementById("student-name");
const allItems = document.querySelectorAll(".first");
// console.log(document.querySelector("[data-theme='dark']"));

// 2. Add Event Listeners
btnAdd.addEventListener("click", addNewStudent);
document.addEventListener("keypress", addNewStudent1);
allItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    const el = e.target;
    el.classList.toggle("updated");
  });
});

// 3. Function to do
function addNewStudent(e) {
  // Prevent the default behaviour of forms
  e.preventDefault();

  // Check if input is dirty
  if (inputName.value) {
    console.log(e);
    // do the remaining things
    const newItem = `<li>${inputName.value}</li>`;
    list.insertAdjacentHTML("beforeend", newItem);
    inputName.value = "";
  }
  // else no do nothing
}

function addNewStudent1(e) {
  if (keyCode === 13) {
    // Prevent the default behaviour of forms
    e.preventDefault();

    // Check if input is dirty
    if (inputName.value) {
      console.log(e);
      // do the remaining things
      const newItem = `<li>${inputName.value}</li>`;
      list.insertAdjacentHTML("beforeend", newItem);
      inputName.value = "";
    }
  }

  // else no do nothing
}

// console.log(allItems);

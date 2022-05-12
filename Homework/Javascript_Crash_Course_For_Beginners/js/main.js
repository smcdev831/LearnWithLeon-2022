let myForm = document.querySelector("#my-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");
let userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value == "" || emailInput.value == "") {
    msg.classList.add("error");
    msg.innerHTML = "Please complete all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);
    nameInput.value = "";
    emailInput.value = "";
  }
}

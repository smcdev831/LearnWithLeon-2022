document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day.toUpperCase() === "WEDNESDAY"){
    alert("Humpdaaaaaaaaaay!")
  }else if (day.toUpperCase() === "SATURDAY" || day === "SUNDAY"){
    alert("It's the weekend")
  }else if (day.toUpperCase() === "TUESDAY" || day === "THURSDAY"){
    alert("Class today!")
  }else{
    alert("It's just a boring day")
  }
}

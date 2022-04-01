document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if(day === "Saturday" || day === "Sunday"){
    alert("It's the weekend")
  }else if (day === "Tuesday" || day === "Thursday"){
    alert("Class today!")
  }else{
    alert("It's just a boring day")
  }
}

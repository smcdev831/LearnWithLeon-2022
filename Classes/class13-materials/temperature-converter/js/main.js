// 0-32
// need the value in C
//convert c to f
//show it

document.querySelector('#converter').addEventListener('click', convert)

function convert() {
  let temp = document.querySelector('#cel').value
  temp = temp * 9/5 + 32

  document.querySelector('#placeToConvert').innerText = temp
}

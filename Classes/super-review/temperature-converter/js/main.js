//Write your pseduo code first!
//get the C number
//use the formula on the number
//return the F number

document.querySelector('h1').addEventListener('click', convert)

function convert(){
  let enteredVal = Number(document.querySelector('input').value)
  let temp = ((enteredVal * 1.8) + 32)
  document.querySelector('h2').innerText = temp
}

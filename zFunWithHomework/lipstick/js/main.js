document.getElementById('red').onclick = partyRed
document.getElementById('pink').onclick = partyPink
document.getElementById('berry').onclick = partyBerry
document.getElementById('neutral').onclick = partyNeutral


function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(213,21,26)'
  document.querySelector('body').style.color = 'white'
}

function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgba(230,81,118)'
  document.querySelector('body').style.color = 'white'
}

function partyBerry() {
  document.querySelector('body').style.backgroundColor = 'rgba(150,27,68)'
  document.querySelector('body').style.color = 'white'
}

function partyNeutral() {
  document.querySelector('body').style.backgroundColor = 'rgba(158,82,73)'
  document.querySelector('body').style.color = 'white'
}

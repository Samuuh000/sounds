 export function Controls({
  buttonPause,
  buttonStop,
  buttonPlay, 
  buttonSet
 }) {

  function reset(){
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
function play(){
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
}

function pause() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function getMinutes(){
  let newMinutes = prompt('Quantos minutos?')
  if(!newMinutes) {
    return false
  }
  return newMinutes
}

return {
  reset,
  play,
  pause,
  getMinutes
}

}
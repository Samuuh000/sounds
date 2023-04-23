import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonPlus,
  buttonMinus
} from './elements.js'

export default function({controls, timer, sound}){

  
  buttonPlay.addEventListener('click', function(){
    controls.play()
  })
  
  buttonStop.addEventListener('click', function(){
    controls.reset()
  })
  buttonPause.addEventListener('click', function(){
    controls.pause()
  })
  
  buttonSet.addEventListener('click', function(){
    
    let minutes = getMinutes(Number(minutesDisplay.textContent)) 
    
  })
  
  buttonMinus.addEventListener('click', function(){})
  
  buttonPlus.addEventListener('click', function(){})
}
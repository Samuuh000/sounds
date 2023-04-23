import { Controls } from "./controls.js" 
import { Timer } from  "./timer.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"


const {
  buttonPause,
  buttonPlay, 
  buttonSet,
  buttonStop,
  buttonMinus,
  buttonPlus,
  minutesDisplay,
  secondsDisplay,
  buttonCloudy,
  buttonCoffee,
  buttonFlame,
  buttonForest,
  onCloudy,
  onCoffee,
  onFlame,
  onForest,
  offCloudy,
  offCoffee,
  offFlame,
  offForest,

}  = elements

const sound = Sound()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})
const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls: controls.reset,

})

buttonForest.addEventListener('click', function(){
  onForest.classList.remove('hide')
  offForest.classList.add('hide')
  buttonForest.classList.add('on')
  buttonFlame.classList.remove('on')
  buttonCloudy.classList.remove('on')
  buttonCoffee.classList.remove('on')
  sound.forestMusicOn()
})


buttonCloudy.addEventListener('click', function(){
  onCloudy.classList.remove('hide')
  offCloudy.classList.add('hide')
  buttonCloudy.classList.add('on')
  buttonFlame.classList.remove('on')
  buttonForest.classList.remove('on')
  buttonCoffee.classList.remove('on')
  sound.cloudyMusicOn()
})



buttonFlame.addEventListener('click', function(){
  onFlame.classList.remove('hide')
  offFlame.classList.add('hide')
  buttonFlame.classList.add('on')
  buttonForest.classList.remove('on')
  buttonCloudy.classList.remove('on')
  buttonCoffee.classList.remove('on')
  sound.flameMusicOn()
})


buttonCoffee.addEventListener('click', function(){
  onCoffee.classList.remove('hide')
  offCoffee.classList.add('hide')
  buttonCoffee.classList.add('on')
  buttonFlame.classList.remove('on')
  buttonCloudy.classList.remove('on')
  buttonForest.classList.remove('on')
  sound.coffeeMusicOn()
})

buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
  sound.pressButton()
})
buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
})
buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()

})
buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()
  if(!newMinutes) {
    timer.reset()
    return 
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

buttonMinus.addEventListener('click', function(){
  timer.minusMinutes()
})
buttonPlus.addEventListener('click', function(){
  timer.plusMinutes()
})

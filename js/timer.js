import Sounds from "./sounds.js"
export function Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let sound = Sounds()


  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes :  newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0 

      updateDisplay(minutes, 0)
      if (isFinished) {
        resetControls()
        updateDisplay()
        sound.timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }
  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function minusMinutes() {
    if(minutes > 0 ) {
      updateMinutes(minutes - 5)
      updateDisplay(minutes)
    }
    
  }
  function plusMinutes() {
    if(minutes >= 0)
      updateMinutes(minutes + 5)
      updateDisplay(minutes)
    }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    minusMinutes,
    plusMinutes
  }
}
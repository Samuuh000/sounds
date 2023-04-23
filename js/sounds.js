export default function() {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true' )
  const forest = new Audio("https://github.com/Samuuh000/sounds/blob/d6cda81da6c1c9555793e0e52f907f98cd599813/sounds/Floresta.wav?raw=true")
  const cloudy = new Audio("https://github.com/Samuuh000/sounds/blob/d6cda81da6c1c9555793e0e52f907f98cd599813/sounds/Chuva.wav?raw=true")
  const coffee = new Audio("https://github.com/Samuuh000/sounds/blob/d6cda81da6c1c9555793e0e52f907f98cd599813/sounds/Cafeteria.wav?raw=true")
  const flame= new Audio("https://github.com/Samuuh000/sounds/blob/d6cda81da6c1c9555793e0e52f907f98cd599813/sounds/Lareira.wav?raw=true")
  let musics = {forest, cloudy, coffee, flame}

  musics.forest.loop = true
  musics.cloudy.loop = true
  musics.coffee.loop = true
  musics.flame.loop = true

  function pressButton(){
    buttonPressAudio.play()
  }
  function timeEnd(){
    kitchenTimer.play()
  }


  function forestMusicOn(){
   
    musics.forest.play()
    musics.cloudy.pause()
    musics.coffee.pause()
    musics.flame.pause()

  }
  function cloudyMusicOn(){
    musics.forest.pause()
    musics.cloudy.play()
    musics.coffee.pause()
    musics.flame.pause()
  }
  function coffeeMusicOn(){
    musics.forest.pause()
    musics.cloudy.pause()
    musics.coffee.play()
    musics.flame.pause()
  }
  function flameMusicOn(){
    musics.forest.pause()
    musics.cloudy.pause()
    musics.coffee.pause()
    musics.flame.play()
  }
  

  return {
    pressButton,
    timeEnd,
    forestMusicOn,
    cloudyMusicOn,
    coffeeMusicOn,
    flameMusicOn
  }
}
  /*
  function playAudio(music, musics){
    let isOn = music.classList.contains('on')
    isOn == false ? musics.pause() : musics.play()
  }*/
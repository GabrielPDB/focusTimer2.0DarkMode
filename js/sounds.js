export default function () {
  let audios = {
    buttonTreeAudio: new Audio('./assets/Floresta.wav'),
    buttonRainAudio: new Audio('./assets/Chuva.wav'),
    buttonMarketAudio: new Audio('./assets/Cafeteria.wav'),
    buttonFlameAudio: new Audio('./assets/Lareira.wav')
  }

  Object.keys(audios).forEach(key => {
    audios[key].loop = true
  })

  function chooseAudio(audioName) {
    Object.keys(audios).forEach(key => {
      audios[key].pause()
    })

    audios[audioName].play()
  }

  function adjustVolume(audio, value) {
    value = value / 100
    audios[audio].volume = value
  }

  return {
    chooseAudio,
    adjustVolume
  }
}

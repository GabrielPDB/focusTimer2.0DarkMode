import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame,
  lightButton,
  darkButton,
  treeVolumeButton,
  rainVolumeButton,
  marketVolumeButton,
  flameVolumeButton
} from './elements.js'

export default function ({ controls }) {
  buttonFlame.addEventListener('click', event => {
    controls.toggleAudioButton('buttonFlame')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonFlameAudio', flameVolumeButton.value)
    } else {
      controls.handleVolume('buttonFlameAudio', 50)
    }
  })

  buttonTree.addEventListener('click', event => {
    controls.toggleAudioButton('buttonTree')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonTreeAudio', treeVolumeButton.value)
    } else {
      controls.handleVolume('buttonTreeAudio', 50)
    }
  })

  buttonRain.addEventListener('click', event => {
    controls.toggleAudioButton('buttonRain')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonRainAudio', rainVolumeButton.value)
    } else {
      controls.handleVolume('buttonRainAudio', 50)
    }
  })

  buttonMarket.addEventListener('click', event => {
    controls.toggleAudioButton('buttonMarket')
    if (event.target.nodeName == 'INPUT') {
      controls.handleVolume('buttonMarketAudio', marketVolumeButton.value)
    } else {
      controls.handleVolume('buttonMarketAudio', 50)
    }
  })

  buttonPlay.addEventListener('click', () => {
    controls.playCountdown()
  })

  buttonStop.addEventListener('click', () => {
    controls.stopCountdown()
  })

  buttonPlus.addEventListener('click', () => {
    controls.increaseCountdown()
  })

  buttonLess.addEventListener('click', () => {
    controls.decreaseCountdown()
  })

  lightButton.addEventListener('click', () => {
    controls.toggleLightDarkMode()
  })

  darkButton.addEventListener('click', () => {
    controls.toggleLightDarkMode()
  })
}

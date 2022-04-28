import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame,
  minutesDisplay,
  secondsDisplay,
  body,
  lightButton,
  darkButton,
  treeVolumeButton,
  rainVolumeButton,
  marketVolumeButton,
  flameVolumeButton
} from './elements.js'
import Sound from './sounds.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Events from './events.js'

let sound = Sound()
let timer = Timer(minutesDisplay, secondsDisplay)
let controls = Controls({
  buttonTree,
  buttonRain,
  buttonMarket,
  buttonFlame,
  sound,
  timer,
  body,
  treeVolumeButton,
  rainVolumeButton,
  marketVolumeButton,
  flameVolumeButton
})

Events({ controls })

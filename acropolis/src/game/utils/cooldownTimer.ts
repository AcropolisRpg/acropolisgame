// const cooldownTimer = (cooldowne) => {
//   let initTime = Date.now()
//   const remainigTime = () => {
//     let  counter = cooldowne - (Date.now() - initTime)
//     if (counter < 0 ) {
//       counter = cooldowne
//       initTime = Date.now()
//     }
//     return  counter
//   }
//   return {
//     remainigTime
//   }
// }

// export default cooldownTimer

export const cooldownTimer = (cooldownTime) => {
  const timer = {
    cooldownTime,
    currentTime: cooldownTime,
    isReady: true,
    triggered: false
  }

  const timeCounter = (deltaTime) => {
    if (timer.isReady && timer.triggered && timer.currentTime === cooldownTime) {
      timer.isReady = false
      timer.currentTime = timer.cooldownTime
    } else if (!timer.isReady && timer.triggered) {
      timer.currentTime = timer.currentTime - deltaTime
      if (timer.currentTime < 0) {
        timer.currentTime = cooldownTime
        timer.triggered = false
        timer.isReady = true
      }
    }
  }

  const trigger = () => {
    timer.triggered = true
  }
  return { timer, timeCounter, trigger }
}

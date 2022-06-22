export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end
}

export const getDistance = (Vector1, Vector2) => {
  return Math.sqrt(
    Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2)
  )
}

export const cooldownTimer = (cooldownTime) => {
  const timer = {
    cooldownTime,
    currentTime: cooldownTime,
    isReady: true,
    triggered: false,
    finished: false
  }

  const timeCounter = (deltaTime) => {
    if (timer.isReady && timer.triggered && timer.currentTime === cooldownTime) {
      timer.isReady = false
      timer.currentTime = timer.cooldownTime
    } else if (!timer.isReady && timer.triggered) {
      timer.currentTime = timer.currentTime - deltaTime
      if (timer.currentTime < 0) {
        timer.finished = true
        timer.currentTime = cooldownTime
        timer.triggered = false
        timer.isReady = true
      }
    }
  }

  const trigger = () => {
    if (!timer.triggered && timer.isReady) {
      timer.triggered = true
    }
  }

  const isFinished = () => {
    let lastFinished
    if (timer.finished) {
      lastFinished = timer.finished
      timer.finished = !timer.finished
    }
    return lastFinished
  }
  return { timer, timeCounter, trigger, isFinished }
}

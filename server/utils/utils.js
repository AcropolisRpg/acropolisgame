export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end;
};

export const getDistance = (Vector1, Vector2) => {
  return Math.sqrt(
    Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2)
  );
};

export const cooldownTimer = (cooldownTime) => {
  const timer = {
    cooldownTime: cooldownTime,
    currentTime: 0,
    isReady: true,
  };

  const timeCounter = (deltaTime) => {
    if (timer.isReady) {
      timer.isReady = false;
      timer.currentTime = timer.cooldownTime;
    } else {
      timer.currentTime = timer.currentTime - deltaTime;
      if (timer.currentTime <= 0) {
        timer.isReady = true;
      }
    }
  };
  return { timer, timeCounter };
};


export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end
}

export const getDistance = (Vector1, Vector2) => {
  return Math.sqrt(
    Math.pow(Vector1.x - Vector2.x, 2) + Math.pow(Vector1.y - Vector2.y, 2)
  )
}

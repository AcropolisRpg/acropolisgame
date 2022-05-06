const cooldownTimer = (cooldowne) => {
  let initTime = Date.now()
  const remainigTime = () => {
    let  counter = cooldowne - (Date.now() - initTime) 
    if (counter < 0 ) {
      counter = cooldowne
      initTime = Date.now()
    }
    return  counter
  }
  return {
    remainigTime
  }
}

export default cooldownTimer
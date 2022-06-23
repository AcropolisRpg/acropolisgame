const loadingBar = (scene) => {
  const progressBar = scene.add.graphics()
  const progressBox = scene.add.graphics()
  const text = scene.add.text(170, 240, 'Loading Acropolis...')

  progressBox.fillStyle(0x222222, 0.8)
  progressBox.fillRect(0, 270, 600, 50)

  scene.load.on('progress', function (value) {
    console.log(value)
    progressBar.clear()
    progressBar.fillStyle(0xffffff, 1)
    progressBar.fillRect(10, 280, 590 * value, 30)
  })

  scene.load.on('fileprogress', function (file) {
    console.log(file.src)
  })
  scene.load.on('complete', function () {
    console.log('complete')
    progressBar.destroy()
    progressBox.destroy()
    text.destroy()
  })
}

export default loadingBar

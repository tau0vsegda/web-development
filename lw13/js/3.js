window.onload = () => {

  const canvas = document.getElementById('person3')
  const person3 = canvas.getContext('2d')

  person3.beginPath()
  person3.fillStyle = "#ffeac1"
  person3.ellipse(200, 200, 120, 100, Math.PI*11/12, 0, Math.PI*2)
  person3.fill()

}
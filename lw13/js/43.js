

function drawPerson4() {
  const canvas = document.getElementById('person4');
  const person4 = canvas.getContext('2d');

  //тело
  person4.fillStyle = "#f46600"
  person4.beginPath()
  person4.moveTo(122, 286)
  person4.quadraticCurveTo(104, 311, 98, 342)
  person4.lineTo(124, 350)
  person4.lineTo(121, 369)
  person4.lineTo(130, 371)
  person4.lineTo(130, 400)
  person4.lineTo(269, 400)
  person4.lineTo(270, 375)
  person4.lineTo(279, 373)
  person4.lineTo(279, 365)
  person4.lineTo(300, 350)
  person4.quadraticCurveTo(298, 315, 278, 286)
  person4.fill()
  person4.beginPath()
  person4.strokeStyle = "#e45700"
  person4.lineWidth = 2
  person4.moveTo(130, 372)
  person4.quadraticCurveTo(200, 389, 270, 375)
  person4.stroke()
  person4.strokeStyle = "#e45700"
  person4.lineWidth = 3
  person4.beginPath()
  person4.arc(201, 198, 120, Math.PI*5/16, Math.PI*47/64)
  person4.stroke()

  //капюшон
  person4.lineWidth = 1
  person4.strokeStyle = "#000000"
  person4.fillStyle = "#f46600"
  person4.beginPath()
  person4.arc(201, 200, 118, 0, Math.PI*2)
  person4.fill()

  //декоративные линии
  person4.beginPath()
  person4.moveTo(181, 301)
  person4.lineTo(185, 293)
  person4.quadraticCurveTo(188, 279, 195, 264)
  person4.lineTo(198, 272)
  person4.lineTo(198, 303)
  person4.lineTo(201, 310)
  person4.stroke()
  person4.beginPath()
  person4.ellipse(198, 208, 84, 75, Math.PI/48, 0, Math.PI*2)
  person4.lineWidth = 1.1
  person4.stroke()
  person4.beginPath()
  person4.strokeStyle = "#000000"
  person4.lineWidth = 1
  person4.moveTo(200, 318)
  person4.lineTo(200, 381)
  person4.stroke()
  person4.beginPath()
  person4.moveTo(125 ,348)
  person4.lineTo(128, 330)
  person4.stroke()
  person4.beginPath()
  person4.moveTo(271 ,349)
  person4.lineTo(269, 331)
  person4.stroke()

  //лицо
  person4.beginPath()
  person4.arc(200, 199, 64, 0, Math.PI*2)
  person4.fillStyle = "#ffeac1"
  person4.fill()

  //левй глаз
  person4.fillStyle = "#ffffff"
  person4.lineWidth = 1/3
  person4.beginPath()
  person4.ellipse(169, 194, 34, 30, Math.PI*4/6, 0, Math.PI*2)
  person4.stroke()
  person4.fill()

  //правый глаз
  person4.beginPath()
  person4.ellipse(229, 199, 34, 30, Math.PI*5/12, 0, Math.PI*2)
  person4.stroke()
  person4.fill()

  //левый зрачок
  person4.fillStyle = "#000000"
  person4.beginPath()
  person4.arc(178, 193, 4, 0, Math.PI*2, true)
  person4.fill()
  
  //правый зрачок
  person4.beginPath()
  person4.arc(220, 196, 4, 0, Math.PI*2, true)
  person4.fill()

  //волосы?
  person4.fillStyle = "#7b4216"
  person4.beginPath()
  person4.moveTo(202, 134)
  person4.bezierCurveTo(131, 168, 131, 223, 195, 263)
  person4.bezierCurveTo(95, 270, 95, 125, 202, 134)
  person4.fill()
  person4.beginPath()
  person4.moveTo(202, 134)
  person4.bezierCurveTo(260, 175, 262, 232, 195, 263)
  person4.bezierCurveTo(295, 282, 299, 140, 202, 134)
  person4.fill()

  //левая рука
  person4.beginPath()
  person4.lineWidth = 1
  person4.arc(106, 355, 17, 0, Math.PI*2)
  person4.fill()
  person4.beginPath()
  person4.arc(118, 350, 7, 0, Math.PI*2)
  person4.stroke()
  person4.fill()

  //правая рука
  person4.beginPath()
  person4.arc(290, 357, 17, 0, Math.PI*2)
  person4.fill()
  person4.beginPath()
  person4.arc(277, 351, 7, 0, Math.PI*2)
  person4.stroke()
  person4.fill() 
  
  //ступни
  person4.beginPath()
  person4.fillStyle = "#000000"
  person4.arc(127, 398, 3, 0, Math.PI*2)
  person4.arc(272, 398, 3, 0, Math.PI*2)
  person4.fill()
  person4.fillRect(127, 395, 145, 6)
  }



function drawPerson3() {
  const canvas = document.getElementById('person3')
  const person3 = canvas.getContext('2d')

  //ноги
  person3.beginPath()
  person3.fillStyle = "#804429"
  person3.moveTo(60, 359)
  person3.lineTo(74, 399)
  person3.lineTo(328, 399)
  person3.lineTo(341, 359)
  person3.fill()

  //ступни
  person3.beginPath()
  person3.fillStyle = "#322e3d"
  person3.moveTo(334, 400)
  person3.quadraticCurveTo(270, 385, 200, 398)
  person3.quadraticCurveTo(160, 382, 66, 398)
  person3.lineTo(66, 403)
  person3.quadraticCurveTo(160, 398, 201, 402)
  person3.quadraticCurveTo(270, 397, 334, 402)
  person3.fill()

  //тело
  person3.beginPath()
  person3.fillStyle = "#ff1e3f"
  person3.moveTo(80, 238)
  person3.quadraticCurveTo(66, 239, 36, 284)
  person3.lineTo(49, 329)
  person3.lineTo(55, 359)
  person3.lineTo(58, 359)
  person3.quadraticCurveTo(90, 394, 190, 386)
  person3.lineTo(220, 386)
  person3.quadraticCurveTo(250, 382, 263, 372)
  person3.lineTo(270, 370)
  person3.lineTo(330, 368)
  person3.quadraticCurveTo(359, 365, 360, 324)
  person3.lineTo(363, 273)
  person3.lineTo(353, 266)
  person3.quadraticCurveTo(340, 240, 318, 240)
  person3.fill()

  //лицо
  person3.beginPath()
  person3.fillStyle = "#ffeac1"
  person3.ellipse(200, 200, 129, 106, 0, 0, Math.PI*2)
  person3.fill()

    //шапка
  person3.beginPath()
  person3.ellipse(200, 200, 130, 107, 0, Math.PI*49/48, Math.PI*93/48, false)
  person3.quadraticCurveTo(200, 125, 70, 195)
  person3.fillStyle = "#00bac9"
  person3.fill()
  person3.beginPath()
  person3.fillStyle = "#ffe018"
  person3.moveTo(67, 199)
  person3.quadraticCurveTo(200, 125, 329, 182)
  person3.lineTo(327,175)
  person3.quadraticCurveTo(197, 116, 68, 193)
  person3.fill()
  person3.beginPath()
  person3.moveTo(179, 96)
  person3.lineTo(181, 105)
  person3.lineTo(185, 105)
  person3.lineTo(194, 100)
  person3.lineTo(196, 100)
  person3.quadraticCurveTo(206, 110, 216, 100)
  person3.lineTo(218,102)
  person3.lineTo(229, 103)
  person3.lineTo(232, 99)
  person3.lineTo(232, 97)
  person3.lineTo(231, 94)
  person3.quadraticCurveTo(225, 85, 216, 89)
  person3.lineTo(215, 85)
  person3.quadraticCurveTo(209, 79, 197, 81)
  person3.lineTo(196, 85)
  person3.quadraticCurveTo(175, 81, 172, 89)
  person3.lineTo(165, 92)
  person3.lineTo(160, 93)
  person3.lineTo(155, 100)
  person3.lineTo(157, 104)
  person3.lineTo(170, 105)
  person3.fill()

  //руки
  person3.beginPath()
  person3.moveTo(86, 302)
  person3.lineTo(88, 307)
  person3.lineTo(92, 309)
  person3.quadraticCurveTo(107, 334, 44, 327)
  person3.bezierCurveTo(20, 315, 18, 285, 45, 281)
  person3.lineTo(55, 284)
  person3.fill()
  person3.beginPath()
  person3.moveTo(336, 276)
  person3.lineTo(324, 291)
  person3.lineTo(323, 298)
  person3.lineTo(317, 305)
  person3.lineTo(316, 314)
  person3.lineTo(321, 318)
  person3.lineTo(333, 316)
  person3.lineTo(338, 318)
  person3.quadraticCurveTo(358, 332, 375, 316)
  person3.lineTo(377, 311)
  person3.quadraticCurveTo(373, 267, 359, 273)
  person3.fill()
  
  //глаза и зрачки
  person3.fillStyle = "#ffffff"
  person3.lineWidth = 1/3
  person3.beginPath()
  person3.ellipse(174, 198, 38, 32, Math.PI*4/6, 0, Math.PI*2)
  person3.stroke()
  person3.fill()
  person3.beginPath()
  person3.ellipse(240, 199, 38, 32, Math.PI*3/8, 0, Math.PI*2)
  person3.stroke()
  person3.fill()
  person3.fillStyle = "#000000"
  person3.beginPath()
  person3.arc(186, 195, 3, 0, Math.PI*2, true)
  person3.fill()
  person3.beginPath()
  person3.arc(225, 196, 3, 0, Math.PI*2, true)
  person3.fill()

  //линии-дополнения
  person3.beginPath()
  person3.lineWidth = 1/2
  person3.moveTo(219, 305)
  person3.lineTo(218, 350)
  person3.lineTo(216, 365)
  person3.lineTo(215, 387)
  person3.stroke()
  person3.beginPath()
  person3.lineWidth = 3
  person3.moveTo(209, 308)
  person3.lineTo(209, 315)
  person3.stroke()
  person3.beginPath()
  person3.moveTo(212, 339)
  person3.lineTo(212, 346)
  person3.stroke()
  person3.beginPath()
  person3.moveTo(209, 369)
  person3.lineTo(209, 376)
  person3.stroke()
  person3.beginPath()
  person3.lineWidth = 1
  person3.moveTo(100, 256)
  person3.lineTo(130, 276)
  person3.lineTo(150, 286)
  person3.lineTo(170, 291)
  person3.lineTo(190, 294)
  person3.lineTo(218, 295)
  person3.lineTo(230, 293)
  person3.lineTo(250, 286)
  person3.lineTo(270, 275)
  person3.lineTo(290, 263)
  person3.lineTo(307, 248)
  person3.stroke()
  person3.beginPath()
  person3.lineWidth = 1
  person3.fillStyle = "#000000"
  person3.moveTo(182, 260)
  person3.lineTo(190, 258)
  person3.lineTo(225, 260)
  person3.lineTo(225, 264)
  person3.lineTo(215, 281)
  person3.lineTo(194, 276)
  person3.lineTo(182, 263)
  person3.fill()
  person3.beginPath()
  person3.moveTo(184, 282)
  person3.lineTo(205, 285)
  person3.lineTo(226, 283)
  person3.lineTo(233, 282)
  person3.stroke()
  person3.beginPath()
  person3.fillStyle = "#ffffff"
  person3.moveTo(190, 264)
  person3.lineTo(198, 264)
  person3.lineTo(198, 261)
  person3.lineTo(193, 261)
  person3.fill()
  person3.beginPath()
  person3.moveTo(201, 265)
  person3.lineTo(209, 265)
  person3.lineTo(209, 261)
  person3.lineTo(202, 261)
  person3.fill()
  person3.beginPath()
  person3.moveTo(211, 265)
  person3.lineTo(221, 265)
  person3.lineTo(221, 261)
  person3.lineTo(211, 261)
  person3.fill()

}



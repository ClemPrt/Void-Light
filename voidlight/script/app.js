/*
  01 - Variables
  02 - Variables initialisation
  03 - setInterval function
  04 - Function ressources + populations
  05 - System cards
  06 - Animation cards
  07 - Animation cards + bitcoins
  08 - Slider
  09 - Random events
  10 - Chrono +
  11 - Slider background
*/




/******************************************
 *
 *              VARIABLES
 *
 * ****************************************/
let population,
food,
water,
energy,
hygiene,
oxygen,
comfort,
humor,
name,
min,
medium,
max,
bitcoins,
changeBitcoinsComfort,
animate,
perso,
moreFood,
moreComfort,
moreEnergy,
moreHygiene,
moreOxygen,
moreWater,
eventCardFood1,
eventCardComfort1,
eventCardOxygen1,
eventCardWater1,
eventCardHygiene1,
year,
eventFood,
eventWater,
eventOxygen,
eventEnergy,
eventHygiene,
answerYesFood1,
answerNoFood1,
answerYesWater1,
answerNoWater1,
answerYesComfort1,
answerNoComfort1,
answerYesOxygen1,
answerNoOxygen1,
answerYesEnergy1,
answerNoEnergy1,
answerYesHygiene1,
answerNoHygiene1,
answerReady




/******************************************
 *
 *        INITIALISATION VARIABLES
 *
 * ****************************************/
function init(){
population = 100
food = 105
water = 115
energy = 120
hygiene = 110
oxygen = 130
comfort = 80
humor = 75
min = 25
medium = 50
max = 75
bitcoins = 30
changeBitcoinsComfort = document.querySelector('.bitcoins_total')
animate = document.querySelectorAll('.animate')
perso = document.querySelectorAll('.perso')
moreFood = document.querySelector('.moreFood')
moreWater = document.querySelector('.moreWater')
moreOxygen = document.querySelector('.moreOxygen')
moreEnergy = document.querySelector('.moreEnergy')
moreHygiene = document.querySelector('.moreHygiene')
moreComfort = document.querySelector('.moreComfort')
eventCardFood1 = document.querySelector(".eventCardFood1")
eventCardWater1 = document.querySelector(".eventCardWater1")
eventCardOxygen1 = document.querySelector(".eventCardOxygen1")
eventCardComfort1 = document.querySelector(".eventCardComfort1")
eventCardEnergy1 = document.querySelector(".eventCardEnergy1")
eventCardHygiene1 = document.querySelector(".eventCardHygiene1")
eventCardMusk = document.querySelector(".eventCardMusk")
eventFood = document.querySelector(".eventFood")
eventWater = document.querySelector(".eventWater")
eventOxygen = document.querySelector(".eventOxygen")
eventComfort = document.querySelector(".eventComfort")
eventEnergy = document.querySelector(".eventEnergy")
eventHygiene = document.querySelector(".eventHygiene")
answerYesFood1 = document.querySelector(".answerYesFood1")
answerNoFood1 = document.querySelector(".answerNoFood1")
answerYesWater1 = document.querySelector(".answerYesWater1")
answerNoWater1 = document.querySelector(".answerNoWater1")
answerYesOxygen1 = document.querySelector(".answerYesOxygen1")
answerNoOxygen1 = document.querySelector(".answerNoOxygen1")
answerYesComfort1 = document.querySelector(".answerYesComfort1")
answerNoComfort1 = document.querySelector(".answerNoComfort1")
answerYesEnergy1 = document.querySelector(".answerYesEnergy1")
answerNoEnergy1 = document.querySelector(".answerNoEnergy1")
answerYesHygiene1 = document.querySelector(".answerYesHygiene1")
answerNoHygiene1 = document.querySelector(".answerNoHygiene1")
answerReady = document.querySelector(".answerReady")
}

init()



/******************************************
 *
 *         SETINTERVAL FUNCTION
 *
 * ****************************************/
let timer = setInterval(
  function(){
    myBitcoins()
    myPopulation()
    myFood()
    myWater()
    myOxygen()
    myEnergy()
    myHygiene()
    myComfort()
    myHumor()
  },700
)

let timer_event = setInterval(
  function(){
    myRandom()
  }, 18000
)




/******************************************
 *
 *    FUNCTION RESSOURCES + POPULATIONS
 *
 * ****************************************/
function myBitcoins(){
  document.querySelector('#bitcoins').innerHTML = Math.floor(bitcoins)
}

function myPopulation() {
  document.querySelector('#population').innerHTML = (Math.floor(population)+" colons")
  if (population < 1) {
    let absolute = document.querySelector('.absolute').innerHTML = "PERDU"
    chronoStop()
  } else if (population >= 200) {
    absolute = document.querySelector('.absolute').innerHTML = "BRAVO"
    chronoStop()
  } else if ((food || water) > 100) {
    population += 0.3
  } else if ((food || water) > 150) {
    population += 3
  } else if ((food || water) > 175) {
    population += 5
  } else if ((food || water) > 200) {
    population += 10
  }
}

function myFood() {
  document.querySelector('#food').innerHTML = (Math.floor(food -= (population/2.5) / 100)+"%")

  if ((food) < 1){
    food = 0
  } else if (food < 25){
    population -= 1
  }
}

function myWater() {
  document.querySelector('#water').innerHTML = (Math.floor(water -= (population/2.5) / 100) + "%")

  if ((water) < 1){
    water = 0
  } else if (water < 25) {
    population -= 3
  }
}

function myOxygen() {
  document.querySelector('#oxygen').innerHTML = (Math.floor(oxygen -= (population / 2) / 100) + "%")

  if ((oxygen) < 1){
    oxygen = 0
  } else if (oxygen < 15){
    population -= 10
  }
}

function myHumor() {
  document.querySelector('#humor').innerHTML = (Math.floor(humor) + "%")

  if ((humor) < 1){
    humor = 0
  } else if ((food || water || oxygen || hygiene) > 75){
    humor += 0.4
  } else if ((food || water || oxygen || hygiene) < 40){
    humor -= 1
  } else if ((food || water || oxygen || hygiene) < 25) {
    humor -= 15
  }
}

function myComfort() {
  document.querySelector('#comfort').innerHTML = (Math.floor(comfort -= (population / 8) / 200) + "%")

  if ((comfort) < 1){
    comfort = 0
  } else if ((food || water || oxygen || energy) > 75) {
    comfort += 0.65
  } else {
    comfort -= 0.4
  }
}

function myEnergy() {
  document.querySelector('#energy').innerHTML = (Math.floor(energy -= (population / 1.9) / 100) + "%")

if ((energy) < 1){
  energy = 0
} else if (energy < 17){
  food -= 1, water -= 1, oxygen -= 5
}
}

function myHygiene() {
  document.querySelector('#hygiene').innerHTML = (Math.floor(hygiene -= (population / 4) / 100) + "%")

  if ((hygiene) < 1){
    hygiene = 0
  }
}



/******************************************
 *
 *            SYSTEM CARDS
 *
 * ****************************************/
changeBitcoinsComfort.addEventListener(
  "click",
  function(){
    if(comfort >= 10){
      comfort -= 10
      bitcoins += 5
    }
  }
)


moreFood.addEventListener(
  "click",
  function(){
    if(bitcoins >= 5){
    food += 30
    bitcoins -= 5
    }
  }
)

moreWater.addEventListener(
  "click",
  function () {
    if (bitcoins >= 5) {
      water += 30
      bitcoins -= 5
    }
  }
)

moreOxygen.addEventListener(
  "click",
  function () {
    if (bitcoins >= 5) {
      oxygen += 30
      bitcoins -= 5
    }
  }
)


moreEnergy.addEventListener(
  "click",
  function () {
    if (bitcoins >= 5) {
      energy += 30
      bitcoins -= 5
    }
  }
)

moreHygiene.addEventListener(
  "click",
  function () {
    if (bitcoins >= 0) {
      hygiene += 30
      bitcoins -= 5
    }
  }
)


/******************************************
 *
 *       ANIMATION CARDS + BITCOINS
 *
 * ****************************************/
for(let i = 0; i < animate.length; i++){
  animate[i].addEventListener(
    "click",
      function(){
        animate[i].animate([
          // keyframes
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-10px)' },
          { transform: 'translateY(0px)' },
        ], {
            // timing options
            duration: 250,
          });
      }
  )
}



/******************************************
 *
 *               SLIDER
 *
 * ****************************************/
let bigImg = document.querySelector('.primarySlide img')
let title = document.querySelector('.primarySlide h2')
let thumbnail = document.querySelectorAll('.slides img')

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener(
    'click',
    function () {
      let altTxt = this.getAttribute('alt')
      let srcBigImg = this.getAttribute('data-srcBigImg')
      bigImg.setAttribute('alt', altTxt)
      bigImg.setAttribute('src', srcBigImg)
      title.innerHTML = altTxt
    }
  )
}

/******************************************
 *
 *             RANDOM EVENTS
 *
 * ****************************************/
function myRandom(){
    let number = Math.floor(Math.random() * 7)
    if (number === 1) {
     // let number2 = Math.floor(Math.random() * 2)
      eventFood.style.border = "3px solid red"
      eventFood.addEventListener(
        "click",
        function(){
          eventFood.style.border = "3px solid white"
          eventCardFood1.style.display = "block"
        }
      )

      answerYesFood1.addEventListener(
        "click",
        function(){
          food += 5,
          humor -= 3,
          bitcoins += 2,
          eventCardFood1.style.display = "none"
        }
      )
      answerNoFood1.addEventListener(
        "click",
        function () {
          food -= 5,
          humor += 3,
          eventCardFood1.style.display = "none"
        }
      )
    } else if (number === 2)  {
      eventWater.style.border = "3px solid red"
      eventWater.addEventListener(
        "click",
        function () {
          eventWater.style.border = "3px solid white"
          eventCardWater1.style.display = "block"
        }
      )

      answerYesWater1.addEventListener(
        "click",
        function () {
          water += 5,
          humor -= 3,
          bitcoins += 2,
          eventCardWater1.style.display = "none"
        }
      )
      answerNoWater1.addEventListener(
        "click",
        function () {
          water -= 5,
          comfort -= 3,
          eventCardWater1.style.display = "none"
        }
      )
    } else if (number === 3) {
      eventOxygen.style.border = "3px solid red"
      eventOxygen.addEventListener(
        "click",
        function () {
          eventOxygen.style.border = "3px solid white"
          eventCardOxygen1.style.display = "block"
          number === 0
        }
      )

      answerYesOxygen1.addEventListener(
        "click",
        function () {
          energy -= 5,
          humor += 3,
          bitcoins += 2,
          eventCardOxygen1.style.display = "none"
        }
      )
      answerNoOxygen1.addEventListener(
        "click",
        function () {
          humor -= 3,
          comfort -= 5,
          oxygen += 5,
          eventCardOxygen1.style.display = "none"
        }
      )
    } else if (number === 4) {
      eventComfort.style.border = "3px solid red"
      eventComfort.addEventListener(
        "click",
        function () {
          eventComfort.style.border = "3px solid white"
          eventCardComfort1.style.display = "block"
          number === 0
        }
      )

      answerYesComfort1.addEventListener(
        "click",
        function () {
          energy -= 5,
          humor += 5,
          comfort += 5
          bitcoins += 2,
          eventCardComfort1.style.display = "none"
        }
      )
      answerNoComfort1.addEventListener(
        "click",
        function () {
          energy += 5,
          humor -= 3,
          comfort -= 5,
          eventCardComfort1.style.display = "none"
        }
      )
    } else if (number === 5){
      eventEnergy.style.border = "3px solid red"
      eventEnergy.addEventListener(
        "click",
        function () {
          eventEnergy.style.border = "3px solid white"
          eventCardEnergy1.style.display = "block"
          number === 0
        }
      )

      answerYesEnergy1.addEventListener(
        "click",
        function () {
          water -= 5,
          oxygen += 5,
          bitcoins += 2,
          eventCardEnergy1.style.display = "none"
        }
      )
      answerNoEnergy1.addEventListener(
        "click",
        function () {
          oxygen -= 5,
          energy += 5,
          eventCardEnergy1.style.display = "none"
        }
      )
    } else if (number === 6) {
      eventHygiene.style.border = "3px solid red"
      eventHygiene.addEventListener(
        "click",
        function () {
          eventHygiene.style.border = "3px solid white"
          eventCardHygiene1.style.display = "block"
          number === 0
        }
      )

      answerYesHygiene1.addEventListener(
        "click",
        function () {
          water -= 5,
          energy -= 5,
          comfort += 5,
          hygiene += 5,
          humor += 5,
          bitcoins += 2,
          eventCardHygiene1.style.display = "none"
        }
      )
      answerNoHygiene1.addEventListener(
        "click",
        function () {
          humor -= 3,
          eventCardHygiene1.style.display = "none"
        }
      )
    }
  }

  answerReady.addEventListener(
    "click",
    function(){
      eventCardMusk.style.display = "none"
      chronoStart()
    }
  )






/******************************************
 *
 *                CHRONO
 *
 * ****************************************/
  let startTime = 0
  let start = 0
  let end = 0
  let diff = 0
  let timerID = 0
function chrono(){
  end = new Date()
	diff = end - start
	diff = new Date(diff)
	let msec = diff.getMilliseconds()
	let sec = diff.getSeconds()
	let min = diff.getMinutes()
	let hr = diff.getHours()-1
	if (min < 10){
    min = "0" + min
  }
  if (sec < 10){
    sec = "0" + sec
  }

  if(msec < 10){
    msec = "00" + msec
  }
  else if(msec < 100){
    msec = "0" + msec
  }
  document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}


function yeartime(){
year = document.querySelector("#yeartime")
let yearCount = 1
year.innerHTML = yearCount + " an"
setInterval(
  () => {
    yearCount += 1
    year.innerHTML = yearCount + " ans"
  }, 15000
)
}


function chronoStart(){
  document.chronoForm.startstop.value = "STOP"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
  chrono()
  init()
  yeartime()
}

function chronoContinue(){
  document.chronoForm.startstop.value = "STOP"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}

function chronoReset(){
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
  start = new Date()
  init()
  yeartime()
}

function chronoStopReset(){
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}

function chronoStop(){
    document.chronoForm.startstop.value = "START"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}


/******************************************
 *
 *           SLIDER BACKGROUND
 *
 * ****************************************/
let positionY = Math.ceil(Math.random() * 600)
let speed = 1
function increase() {

    speed += 0.6
    document.querySelector('.image').style.backgroundPosition = `${speed}px center`
}
function scrollImg() {
    setInterval(increase, 10)
}

  window.addEventListener(
      'load',
      function () {
          scrollImg()
          univers()
          setInterval(function () { speed = 1; univers() }, 9000)
      }
  )

function univers() {
  let current =   document.querySelector('.current');
  if (current != null) {
      current.classList.remove('current')
      current.style.visibility = "hidden"
  }

  let choicePlanet = document.querySelectorAll(".planet")
  for (let i = 0; i < choicePlanet.length; i++) {
      let data = Math.ceil(Math.random() * 6)
      if (data == 1) {
          document.querySelector('.hearth').classList.add('current')
      }
      else if (data == 2) {
          document.querySelector('.stone').classList.add('current')
      }
      else if (data == 3) {
          document.querySelector('.moon').classList.add('current')
      }
      else if (data == 4) {
          document.querySelector('.mars').classList.add('current')
      }
      else if (data == 5) {
          document.querySelector('.pluton').classList.add('current')
      }
      else {
          document.querySelector('.jupiter').classList.add('current')
      }
  }
}

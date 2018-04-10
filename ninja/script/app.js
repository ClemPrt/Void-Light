let population = 198
let food = 100
let water = 100
let energy = 100
let hygiene = 100
let oxygen = 100
let comfort = 50
let humor = 75
let min = 25
let medium = 50
let max = 75
let bitcoins = 100
let animate = document.querySelectorAll('.animate')
let moreFood = document.querySelector('.moreFood')
let moreWater = document.querySelector('.moreWater')
let moreOxygen = document.querySelector('.moreOxygen')
let moreEnergy = document.querySelector('.moreEnergy')
let moreHygiene = document.querySelector('.moreHygiene')
let moreComfort = document.querySelector('.moreComfort')

let timer = setInterval(
  function(){
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





function myPopulation() {
  document.querySelector('#population').innerHTML = Math.floor(`${population}`)
  if (population < 1) {
    let absolute = document.querySelector('.absolute').innerHTML = "PERDU"
  } else if (population >= 200) {
    absolute = document.querySelector('.absolute').innerHTML = "BRAVO"
  } else if ((food || water) > 100) {
    population += 0.3
    console.log("GOOD")
  } else if ((food || water) > 150) {
    population += 3
    console.log("ALLEZ")
  } else if ((food || water) > 175) {
    population += 5
    console.log("175")
  } else if ((food || water) > 200) {
    population += 10
    console.log("200")
  }

}

function myFood() {
  document.querySelector('#food').innerHTML = Math.floor(food -= population / 100)

  if ((food) < 1){
    food = 0
  } else if (food < 25){
    population -= 1
  }
}

function myWater() {
  document.querySelector('#water').innerHTML = Math.floor(water -= population / 100)

  if ((water) < 1){
    water = 0
  } else if (water < 25) {
    population -= 1
  }
}

function myOxygen() {
  document.querySelector('#oxygen').innerHTML = Math.floor(oxygen -= population / 100)

  if ((oxygen) < 1){
    oxygen = 0
  } else if (oxygen < 15){
    population -= 10
  }
}

function myHumor() {
  document.querySelector('#humor').innerHTML = Math.floor(humor)

  if ((humor) < 1){
    humor = 0
  } else if ((food && water && oxygen && hygiene) > 75){
    humor += 0.1
  } else {
    humor -= 10
  }
}

function myComfort() {
  document.querySelector('#comfort').innerHTML = Math.floor(comfort -= (population/4) / 200)

  if ((comfort) < 1){
    comfort = 0
  }
}

function myEnergy() {
  document.querySelector('#energy').innerHTML = Math.floor(energy -= population / 100)

if ((energy) < 1){
  energy = 1
} else if (energy < 25){
  food -= 1, water -= 1, oxygen -= 5
}
}

function myHygiene() {
  document.querySelector('#hygiene').innerHTML = Math.floor(hygiene -= (population/4) / 100)

  if ((hygiene) < 1){
    hygiene = 0
  }
}






moreFood.addEventListener(
  "click",
  function(){
    food += 30
    bitcoins -= 5
  }
)

moreWater.addEventListener(
  "click",
  function () {
    water += 30
    bitcoins -= 5
  }
)

moreOxygen.addEventListener(
  "click",
  function () {
    oxygen += 30
    bitcoins -= 5
  }
)

moreComfort.addEventListener(
  "click",
  function () {
    comfort += 30
    bitcoins -= 5
  }
)

moreEnergy.addEventListener(
  "click",
  function () {
    energy += 30
    bitcoins -= 5
  }
)

moreHygiene.addEventListener(
  "click",
  function () {
    hygiene += 30
    bitcoins -= 5
  }
)



for(let i = 0; i < animate.length; i++){
  animate[i].addEventListener(
    "click",
      function(){
        animate[i].animate([
          // keyframes
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-10px)' }
        ], {
            // timing options
            duration: 250,
          });
      }
  )
}


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
      //enlever la classe current à l'élement en cours
      let actualCurrent = document.querySelector('.slides .current')
      actualCurrent.classList.remove('current')
      //ajouter la classe current à l'élement en cours
      this.parentNode.classList.add('current')
    }
  )
}


function loose(){

}


let population = 100
let food = 75
let water = 75
let energy = 50
let hygiene = 100
let oxygen = 100
let comfort = 50
let humor = 75
let min = 25
let medium = 50
let max = 75
let bitcoins = 25
let animate = document.querySelectorAll('.animate')
let moreFood = document.querySelector('.moreFood')
let moreWater = document.querySelector('.moreWater')
let moreOxygen = document.querySelector('.moreOxygen')
let moreComfort = document.querySelector('.moreComfort')
let moreEnergy = document.querySelector('.moreEnergy')
let moreHygiene = document.querySelector('.moreHygiene')

let timer = setInterval(
  function(){
    myLife()
    myPopulation()
    myFood()
    myWater()
    myOxygen()
    myHumor()
    myComfort()
    myEnergy()
    myHygiene()
  },700
)


function myLife() {
  if ((food || water) < min){
    population -= 1 }
  if ((comfort || hygiene || energy || oxygen) < min){
  humor -= 1 }
  if ((energy || hygiene || oxygen) < min){
    comfort-1}
}


function myPopulation() {
  document.querySelector('#population').innerHTML = Math.floor(`${population}`)

  if(population < 1){
    let absolute = document.querySelector('.absolute').innerHTML = "PERDU"
  } else if((food || water) > 100){
    population +=1
  } else if ((food || water) > 150) {
    console.log("150")
  } else if ((food || water) > 175) {
    console.log("175")
  } else if ((food || water) > 200) {
    console.log("200")
  }

}

function myFood() {
  food = document.querySelector('#food').innerHTML = Math.floor(food -= population / 100)

  if ((food) < 1){
    food = 0
  }
}

function myWater() {
  document.querySelector('#water').innerHTML = Math.floor(water -= population / 100)

  if ((water) < 1){
    water = 0
  }
}

function myOxygen() {
  document.querySelector('#oxygen').innerHTML = Math.floor(oxygen -= population / 100)

  if ((oxygen) < 1){
    oxygen = 0
  }
}

function myHumor() {
  document.querySelector('#humor').innerHTML = Math.floor(humor -= population / 100)

  if ((humor) < 1){
    humor = 0
  }
}

function myComfort() {
  document.querySelector('#comfort').innerHTML = Math.floor(comfort -= population / 200)

  if ((comfort) < 1){
    comfort = 0
  }
}

function myEnergy() {
  document.querySelector('#energy').innerHTML = Math.floor(energy -= population / 100)

if ((energy) < 1){
  energy = 1
}
}

function myHygiene() {
  document.querySelector('#hygiene').innerHTML = Math.floor(hygiene -= population / 100)

  if ((hygiene) < 1){
    hygiene = 0
  }
}

/* function myBitcoins() {
  let changeFood = 1
  let changeWater = 2
  let choice.addEventListener('click', function()){
    choice = dataset.value
    if

  }
}

*/



moreFood.addEventListener(
  "click",
  function(){
    food += 10
  }
)

moreWater.addEventListener(
  "click",
  function () {
    water += 10
  }
)

moreOxygen.addEventListener(
  "click",
  function () {
    oxygen += 10
  }
)

moreComfort.addEventListener(
  "click",
  function () {
    comfort += 10
  }
)

moreEnergy.addEventListener(
  "click",
  function () {
    energy += 10
  }
)

moreHygiene.addEventListener(
  "click",
  function () {
    hygiene += 10
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
let population = 100
let food = 75
let water = 75
let energy = 50
let hygiene = 100
let oxygen = 100
let comfort = 50
let humor = 75
let bitcoins = 100
let min = 25
let medium = 50
let max = 75

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
  },200
)


function myLife() {
  if ((food || water) < min){
    population -= 1
  }
}

function myPopulation() {
  document.querySelector('#population').innerHTML = Math.floor(`${population}`)
  food -= population/100

  if(population < 1){
    windowlert('perdu')
  }

}

function myFood() {
  document.querySelector('#food').innerHTML = Math.floor(food)
  food -= population/100

  if ((food) < 1){
    food = 0
  }
}

function myWater() {
  document.querySelector('#water').innerHTML = Math.floor(water)
  water -= population/100

  if ((water) < 1){
    water = 0
  }
}

function myOxygen() {
  document.querySelector('#oxygen').innerHTML = Math.floor(oxygen)
  oxygen -= population/100

  if ((oxygen) < 1){
    oxygen = 0
  }
}

function myHumor() {
  document.querySelector('#humor').innerHTML = Math.floor(humor)
  humor -= population/100

  if ((humor) < 1){
    humor = 0
  }
}

function myComfort() {
  document.querySelector('#comfort').innerHTML = Math.floor(comfort)
  comfort -= population/100

  if ((comfort) < 1){
    comfort = 0
  }
}

function myEnergy() {
document.querySelector('#energy').innerHTML = Math.floor(energy)
energy -= population/100

if ((energy) < 1){
  energy = 1
}
}

function myHygiene() {
  hygiene -= population/100
  document.querySelector('#hygiene').innerHTML = Math.floor(hygiene)

  if ((hygiene) < 1){
    hygiene = 0
  }
}

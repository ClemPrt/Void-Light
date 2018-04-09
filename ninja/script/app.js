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
    myRessources()
    myLife()
  },100
)

function myRessources() {

    if ((food) < 1){
      food = 1
    }
    if ((water) < 1){
      water = 1
    }
    if ((energy) < 1){
      energy = 1
    }
    if ((hygiene) < 1){
      hygiene = 1
    }
    if ((oxygen) < 1){
      oxygen = 1
    }
    if ((comfort) < 1){
      comfort = 1
    }
    if ((humor) < 1){
      humor = 1
    }


    document.querySelector('#population').innerHTML = Math.floor(population)
    food -= population/100
    document.querySelector('#food').innerHTML = Math.floor(food)
    water -= population/100
    document.querySelector('#water').innerHTML = Math.floor(water)
    energy -= population/100
    document.querySelector('#energy').innerHTML = Math.floor(energy)
    hygiene -= population/100
    document.querySelector('#hygiene').innerHTML = Math.floor(hygiene)
    oxygen -= population/100
    document.querySelector('#oxygen').innerHTML = Math.floor(oxygen)
    comfort -= population/100
    document.querySelector('#comfort').innerHTML = Math.floor(comfort)
    humor -= population/100
    document.querySelector('#humor').innerHTML = Math.floor(humor)


    if(population < 1){
      window.alert('perdu')
    }
}

function myLife() {
  if ((food || water) < min){
    population -= 1
  }
}

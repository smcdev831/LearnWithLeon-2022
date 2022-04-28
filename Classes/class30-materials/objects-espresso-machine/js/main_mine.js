//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine = {
    this.grind = espressoGrind;
    this.brew = espressoBrew;
    this.strength = espressoStrength;
    this.time = espressoTime;
}

heatWater() {
    alert('The water is heating!')
}

drinkComplete() {
    alert('Your drink is ready!')
}

let doubleShot = new EspressoMachine ('fine', 'double', 10, 3)
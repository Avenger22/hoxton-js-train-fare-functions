//Varible declaration and initialization using the initial data
alert("Welcome to Train Fare !!!")
console.log("This amazing program !")

const userName = prompt("What is your Name : ")
confirm("Would you like to confirm this : ")

const userAge = Number(prompt("What is your age: "))
confirm("Would you confirm this : ")

const userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n KUKES")
confirm("Would you confirm this : ")

const userDestinationPoint = prompt("What is your Destination Point too choose from : \n MILANO \n TORINO \n MUNICH :")
confirm("Would you confirm this : ")

alert("`The distances betwen destinations are as follow : \n TIRANA-MILANO 900KM \n TIRANA-TORINO 800KM \n TIRANA-MUNICH 5000KM :")
alert("`The distances betwen destinations are as follow : \n KUKES-MILANO 800KM \n TIRANA-TORINO 600KM \n TIRANA-MUNICH 4000KM :")

const priceConstant = 0.21

//DECLARATION OF OBJECTS 
const distances = {

    tirana: {
        milano: 900,
        torino: 800,
        munich: 5000
    },

    kukes: {
        milano: 800,
        torino: 600,
        munich: 4000
    }

}

const destinationPrices = {
    tirana: {
        milano: 0,
        torino: 0,
        munich: 0
    },

    kukes: {
        milano: 0,
        torino: 0,
        munich: 0
    }
}

const discountPricesJunior = {
    tirana: {
        milano: 0,
        torino: 0,
        munich: 0
    },

    kukes: {
        milano: 0,
        torino: 0,
        munich: 0
    }
}

const discountPricesSenior = {
    tirana: {
        milano: 0,
        torino: 0,
        munich: 0
    },

    kukes: {
        milano: 0,
        torino: 0,
        munich: 0
    }
}

//Conditionals to find price based on user input
if(userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") {
    destinationPrices.tirana.milano = priceConstant * distances.tirana.milano
    discountPricesJunior.tirana.milano = destinationPrices.tirana.milano - (0.20 * destinationPrices.tirana.milano)
    discountPricesSenior.tirana.milano = destinationPrices.tirana.milano - (0.40 * destinationPrices.tirana.milano)
}

else if (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") {
    destinationPrices.tirana.torino = priceConstant * distances.tirana.torino
    discountPricesJunior.tirana.torino = destinationPrices.tirana.torino - (0.20 * destinationPrices.tirana.torino)
    discountPricesSenior.tirana.torino  = destinationPrices.tirana.torino - (0.40 * destinationPrices.tirana.torino)
}

else if (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") {
    destinationPrices.tirana.munich = priceConstant * distances.tirana.munich
    discountPricesJunior.tirana.munich = destinationPrices.tirana.munich - (0.20 * destinationPrices.tirana.munich)
    discountPricesSenior.tirana.munich  = destinationPrices.tirana.munich - (0.40 * destinationPrices.tirana.munich)
}

else if (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") {
    destinationPrices.kukes.milano = priceConstant * distances.kukes.milano
    discountPricesJunior.kukes.milano = destinationPrices.kukes.milano - (0.20 * destinationPrices.kukes.milano)
    discountPricesSenior.kukes.milano = destinationPrices.kukes.milano - (0.40 * destinationPrices.kukes.milano)
}

else if (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") {
    destinationPrices.kukes.torino = priceConstant * distances.kukes.torino
    discountPricesJunior.kukes.torino = destinationPrices.kukes.torino - (0.20 * destinationPrices.kukes.torino)
    discountPricesSenior.kukes.torino = destinationPrices.kukes.torino - (0.40 * destinationPrices.kukes.torino)
}

else if (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") {
    destinationPrices.kukes.munich = priceConstant * distances.kukes.munich
    discountPricesJunior.kukes.munich = destinationPrices.kukes.munich - (0.20 * destinationPrices.kukes.munich)
    discountPricesSenior.kukes.munich = destinationPrices.kukes.munich - (0.40 * destinationPrices.kukes.munich)
}


//Here the evauluation of the data PART 1 BIG CONDITIONALS
if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.tirana.milano} with 20% discount wich is: ${discountPricesJunior.tirana.milano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.tirana.milano} with 20% discount wich is: ${discountPricesJunior.tirana.milano.toFixed(1)}$`)
}

else if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.tirana.torino} with 20% discount wich is: ${discountPricesJunior.tirana.torino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.tirana.torino} with 20% discount wich is: ${discountPricesJunior.tirana.torino.toFixed(1)}$`)
}

else if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.tirana.munich} with 20% discount wich is: ${discountPricesJunior.tirana.munich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.tirana.munich} with 20% discount wich is: ${discountPricesJunior.tirana.munich.toFixed(1)}$`)
}

else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 20% discount wich is: ${discountPricesJunior.kukes.milano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 20% discount wich is: ${discountPricesJunior.kukes.milano.toFixed(1)}$`)
}

else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.kukes.torino} with 20% discount wich is: ${discountPricesJunior.kukes.torino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.kukes.torino}} with 20% discount wich is: ${discountPricesJunior.kukes.torino.toFixed(1)}$`)
}

else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.kukes.munich} with 20% discount wich is: ${discountPricesJunior.kukes.munich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distances.kukes.munich} with 20% discount wich is: ${discountPricesJunior.kukes.munich.toFixed(1)}$`)
}

//PART 2 OF BIG CONDITIONALS
else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.milano} with 40% discount wich is: ${discountPricesSenior.tirana.milano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.milano} with 40% discount wich is: ${discountPricesSenior.tirana.milano.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.torino} with 40% discount wich is: ${discountPricesSenior.tirana.torino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.torino} with 40% discount wich is: ${discountPricesSenior.tirana.torino.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.munich} with 40% discount wich is: ${discountPricesSenior.tirana.munich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.munich} with 40% discount wich is: ${discountPricesSenior.tirana.munich.toFixed(1)}$`)
}
// KUKES CONDITIONALS FOR SENIOR DISCOUNT
else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.milano} with 40% discount wich is: ${discountPricesSenior.kukes.milano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.milano} with 40% discount wich is: ${discountPricesSenior.kukes.milano.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.torino} with 40% discount wich is: ${discountPricesSenior.kukes.torino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.torino} with 40% discount wich is: ${discountPricesSenior.kukes.torino.toFixed(1)}$`)
}

else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.munich} with 40% discount wich is: ${discountPricesSenior.kukes.munich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.munich} with 40% discount wich is: ${discountPricesSenior.kukes.munich.toFixed(1)}$`)
}

//PART 3 OF BIG CONDITIONALS to check both tirana and kukes for no discount price
else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.milano} with 0% discount wich is: ${destinationPrices.tirana.milano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.milano} with 0% discount wich is: ${destinationPrices.tirana.milano.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.torino} with 0% discount wich is: ${destinationPrices.tirana.torino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.torino} with 0% discount wich is: ${destinationPrices.tirana.torino.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.munich} with 0% discount wich is: ${destinationPrices.tirana.munich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.tirana.munich} with 0% discount wich is: ${destinationPrices.tirana.munich.toFixed(1)}$`)
}

//HERE WE CHECK FOR KUKES NO DISCOUNT
else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.milano} with 0% discount wich is: ${destinationPrices.kukes.milano.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.milano} with 0% discount wich is: ${destinationPrices.kukes.milano.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.torino} with 0% discount wich is: ${destinationPriceKukesTorino.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.torino} with 0% discount wich is: ${destinationPriceKukesTorino.toFixed(1)}$`)
}

else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { 
    console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.munich} with 0% discount wich is: ${destinationPrices.kukes.munich.toFixed(1)}$`)
    alert(`User: ${userName} is of age: ${userAge} and will travel km: ${destinationPrices.kukes.munich} with 0% discount wich is: ${destinationPrices.kukes.munich.toFixed(1)}$`)
}
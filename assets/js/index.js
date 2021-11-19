//Function declaration and body is here

//numberCheckingNull (number) ==> void just does things
function numberCheckingNull(userAgeParameter) {

    if (Number.isNaN(userAgeParameter) || userAgeParameter < 1 ||userAgeParameter > 120) {
        alert("Please enter again, the age cannot be more than 120, and less than 1, also please enter a number for it")
        userAge = Number(prompt("What is your age: "))
        confirm("Would you confirm this : ")

        if(userAgeParameter < 1 || userAgeParameter > 120) {
            alert("I have no words sir, cant you read the text ???")
            userAge = Number(prompt("What is your age: "))
            confirm("Would you confirm this : ")

            if(userAgeParameter < 1 || userAgeParameter > 120) {
                throw new Error("The user was trying to troll us with not understaning the rules")
            }
        }
    }

}
//startingPointChecking (string) ==> void just does things
function startingPointChecking(userStartingPointParameter) {

    if (userStartingPointParameter === "tirana" || userStartingPointParameter === "Tirana" ||  userStartingPointParameter === "KUKES" || userStartingPointParameter === "Kukes") {

        alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
        userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n KUKES")
        confirm("Would you confirm this : ") 
        
        if (userStartingPointParameter === "tirana" || userStartingPointParameter === "Tirana" ||  userStartingPointParameter === "KUKES" || userStartingPointParameter === "Kukes") {
            alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
            userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n KUKES")
            confirm("Would you confirm this : ") 
    
            if (userStartingPointParameter === "tirana" || userStartingPointParameter === "Tirana" ||  userStartingPointParameter === "KUKES" || userStartingPointParameter === "Kukes") {
                throw new Error("The user was trying to troll us with not understaning the rules")
            }
        }
        
    }

}
//destinationPointChecking (string) ==> void just does things
function destinationPointChecking(userDestinationPointParameter) {

    if (userDestinationPointParameter === "Milano" || userDestinationPointParameter === "milano") {

        alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
        userDestinationPoint = prompt("What is your Destination Point too chose from  \n MILANO \n TORINO \n MUNICH")
        confirm("Would you confirm this : ")
        
        if (userDestinationPointParameter === "Milano" || userDestinationPointParameter === "milano") {
            alert("Please enter the name in like TIRANA not lowercase or capitalize or random please try again.")
            userDestinationPoint = prompt("What is your Destination Point too chose from  \n MILANO \n TORINO \n MUNICH")
            confirm("Would you confirm this : ")  
    
            if (userDestinationPointParameter === "Milano" || userDestinationPointParameter === "milano") {
                throw new Error("The user was trying to troll us with not understaning the rules")
            }
        }
                
    }

}
//userCalculatingPrices (sting, string) ==> void just does things
function userCalculatingPrices(userStartingPointParameter, userDestinationPointParameter) {

    //Conditionals to find price based on user input
    if(userStartingPointParameter === "TIRANA" && userDestinationPointParameter === "MILANO") {
        destinationPriceTiranaMilano = priceConstant * distanceTiranaMilano
        discountPriceTiranaMilanoJunior = destinationPriceTiranaMilano - (0.20 * destinationPriceTiranaMilano)
        discountPriceTiranaMilanoSenior = destinationPriceTiranaMilano - (0.40 * destinationPriceTiranaMilano)
    }

    else if (userStartingPointParameter === "TIRANA" && userDestinationPointParameter === "TORINO") {
        destinationPriceTiranaTorino = priceConstant * distanceTiranaTorino
        discountPriceTiranaTorinoJunior = destinationPriceTiranaTorino - (0.20 * destinationPriceTiranaTorino)
        discountPriceTiranaTorinoSenior = destinationPriceTiranaTorino - (0.40 * destinationPriceTiranaTorino)
    }

    else if (userStartingPointParameter === "TIRANA" && userDestinationPointParameter === "MUNICH") {
        destinationPriceTiranaMunich = priceConstant * distanceTiranaMunich
        discountPriceTiranaMunichJunior = destinationPriceTiranaMunich - (0.20 * destinationPriceTiranaMunich)
        discountPriceTiranaMunichSenior = destinationPriceTiranaMunich - (0.40 * destinationPriceTiranaMunich)
    }

    else if (userStartingPointParameter === "KUKES" && userDestinationPointParameter === "MILANO") {
        destinationPriceKukesMilano = priceConstant * distanceKukesMilano
        discountPriceKukesMilanoJunior = destinationPriceKukesMilano - (0.20 * destinationPriceKukesMilano)
        discountPriceKukesMilanoSenior = destinationPriceKukesMilano - (0.40 * destinationPriceKukesMilano)
    }

    else if (userStartingPointParameter === "KUKES" && userDestinationPointParameter === "TORINO") {
        destinationPriceKukesTorino = priceConstant * distanceKukesTorino
        discountPriceKukesTorinoJunior = destinationPriceKukesTorino - (0.20 * destinationPriceKukesTorino)
        discountPriceKukesTorinoSenior = destinationPriceKukesTorino - (0.40 * destinationPriceKukesTorino)
    }

    else if (userStartingPointParameter === "KUKES" && userDestinationPointParameter === "MUNICH") {
        destinationPriceKukesMunich = priceConstant * distanceKukesMunich
        discountPriceKukesMunichJunior = destinationPriceKukesMunich - (0.20 * destinationPriceKukesMunich)
        discountPriceKukesMunichSenior = destinationPriceKukesMunich - (0.40 * destinationPriceKukesMunich)
    }

}
//userDataAndPricesEvaluate (number, string, string) ==> void just does things
function userDataAndPricesEvaluate(userAgeParameter, userStartingPointParameter, userDestinationPointParameter) {

    //Here the evauluation of the data
    if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 20% discount wich is: ${discountPriceTiranaMilanoJunior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 20% discount wich is: ${discountPriceTiranaMilanoJunior.toFixed(1)}$`)
    }

    else if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 20% discount wich is: ${discountPriceTiranaTorinoJunior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 20% discount wich is: ${discountPriceTiranaTorinoJunior.toFixed(1)}$`)
    }

    else if ( userAge  < 18 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 20% discount wich is: ${discountPriceTiranaMunichJunior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 20% discount wich is: ${discountPriceTiranaMunichJunior.toFixed(1)}$`)
    }

    else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 20% discount wich is: ${discountPriceKukesMilanoJunior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 20% discount wich is: ${discountPriceKukesMilanoJunior.toFixed(1)}$`)
    }

    else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 20% discount wich is: ${discountPriceKukesTorinoJunior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 20% discount wich is: ${discountPriceKukesTorinoJunior.toFixed(1)}$`)
    }

    else if (userAge  < 18 && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 20% discount wich is: ${discountPriceKukesMunichJunior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 20% discount wich is: ${discountPriceKukesMunichJunior.toFixed(1)}$`)
    }

    //PART 2 OF BIG CONDITIONALS
    else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 40% discount wich is: ${discountPriceTiranaMilanoSenior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 40% discount wich is: ${discountPriceTiranaMilanoSenior.toFixed(1)}$`)
    }

    else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 40% discount wich is: ${discountPriceTiranaTorinoSenior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 40% discount wich is: ${discountPriceTiranaTorinoSenior.toFixed(1)}$`)
    }

    else if (userAge  > 65 && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
    }
    // KUKES CONDITIONALS FOR SENIOR DISCOUNT
    else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 40% discount wich is: ${discountPriceKukesMilanoSenior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 40% discount wich is: ${discountPriceKukesMilanoSenior.toFixed(1)}$`)
    }

    else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 40% discount wich is: ${discountPriceKukesTorinoSenior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 40% discount wich is: ${discountPriceKukesTorinoSenior.toFixed(1)}$`)
    }

    else if (userAge  > 65 && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { //Junior get 20% discount
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 40% discount wich is: ${discountPriceTiranaMunichSenior.toFixed(1)}$`)
    }

    //PART 3 OF BIG CONDITIONALS to check both tirana and kukes for no discount price
    else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "MILANO") ) { 
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 0% discount wich is: ${destinationPriceTiranaMilano.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMilano} with 0% discount wich is: ${destinationPriceTiranaMilano.toFixed(1)}$`)
    }

    else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "TORINO") ) { 
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 0% discount wich is: ${destinationPriceTiranaTorino.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaTorino} with 0% discount wich is: ${destinationPriceTiranaTorino.toFixed(1)}$`)
    }

    else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "TIRANA" && userDestinationPoint === "MUNICH") ) { 
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceTiranaMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
    }

    //HERE WE CHECK FOR KUKES NO DISCOUNT
    else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "MILANO") ) { 
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 0% discount wich is: ${destinationPriceKukesMilano.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMilano} with 0% discount wich is: ${destinationPriceKukesMilano.toFixed(1)}$`)
    }

    else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "TORINO") ) { 
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 0% discount wich is: ${destinationPriceKukesTorino.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesTorino} with 0% discount wich is: ${destinationPriceKukesTorino.toFixed(1)}$`)
    }

    else if ((userAge  >= 18 && userAge <=65) && (userStartingPoint === "KUKES" && userDestinationPoint === "MUNICH") ) { 
        console.log(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
        alert(`User: ${userName} is of age: ${userAge} and will travel km: ${distanceKukesMunich} with 0% discount wich is: ${destinationPriceTiranaMunich.toFixed(1)}$`)
    }

}

//Varible declaration and initialization using the initial data
const priceConstant = 0.21
//distances betwen places TIRANA
const distanceTiranaMilano = 900
const distanceTiranaTorino = 800
const distanceTiranaMunich = 5000
//distances betwen places KUKES
const distanceKukesMilano = 800
const distanceKukesTorino = 600
const distanceKukesMunich = 4000
//VARIABLE DECLARATION
let destinationPriceTiranaMilano, destinationPriceTiranaTorino, destinationPriceTiranaMunich
let discountPriceTiranaMilanoJunior, discountPriceTiranaTorinoJunior, discountPriceTiranaMunichJunior
let discountPriceTiranaMilanoSenior, discountPriceTiranaTorinoSenior, discountPriceTiranaMunichSenior
let destinationPriceKukesMilano, destinationPriceKukesTorino, destinationPriceKukesMunich
let discountPriceKukesMilanoJunior, discountPriceKukesTorinoJunior, discountPriceKukesMunichJunior
let discountPriceKukesMilanoSenior, discountPriceKukesTorinoSenior, discountPriceKukesMunichSenior

alert("Welcome to Train Fare !!!")
console.log("This amazing program !")

let userName = prompt("What is your Name : ")
confirm("Would you like to confirm this : ")

let userAge = Number(prompt("What is your age: "))
confirm("Would you confirm this : ")

numberCheckingNull(userAge) //Call the function wich controls if user is trolling and enters not a number for age etc

let userStartingPoint = prompt("What is your Starting Point too chose from \n TIRANA \n KUKES")
confirm("Would you confirm this : ")

startingPointChecking(userStartingPoint) //Here we call the function wich chekcs the starting point matches string

let userDestinationPoint = prompt("What is your Destination Point too choose from : \n MILANO \n TORINO \n MUNICH :")
confirm("Would you confirm this : ")

destinationPointChecking(userDestinationPoint) //Here we call the function wich checks the destination point matches

alert("`The distances betwen destinations are as follow : \n TIRANA-MILANO 900KM \n TIRANA-TORINO 800KM \n TIRANA-MUNICH 5000KM :")
alert("`The distances betwen destinations are as follow : \n KUKES-MILANO 800KM \n TIRANA-TORINO 600KM \n TIRANA-MUNICH 4000KM :")

userCalculatingPrices(userStartingPoint, userDestinationPoint) //Here we call the function to calculate prices

userDataAndPricesEvaluate(userAge, userStartingPoint, userDestinationPoint) //Here we call the function to evaluate things
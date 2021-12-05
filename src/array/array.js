'use strict'

/*
 * Array/Object
 *
 * const arr = Array('a', 'C', 'B', 'd', 0, 2)
 * const arr = new Array('a', 'C', 'B', 'd', 0, 2)
 * const arr = ['a', 'C', 'B', 'd', 0, 2]
 * ______________________________
 */

// # Declare an associative Array/Object
const arr = ['a', 'C', 'B', 'd', 0, 2]

// * Output
var arrOutput = arr // @Return : a,C,B,d,0,2
var arrOutput = arr[9] // @Return : undefined
var arrOutput = arr[0] // @Return : a 


// # Declare an associative Array/Object
const arrObject = {
    'firstName': 'Neeraj',
    'lastName': 'Singh',
    'age': 25,

    // Define function inside an Object
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

// * Output
var arrOutput = arrObject.firstName // @Return : Neeraj
var arrOutput = arrObject.fullName() // Function inside Object @Return : Neeraj Singh


document.getElementById('console').innerHTML = arrOutput
console.log(arrOutput);
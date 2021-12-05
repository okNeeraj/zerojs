/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Array Methods
 *
 * arr.arrayMethod(parameters)
 * 
 */

const arr = ['a', 'C', 'B', 'd', 0, 2]


/*
 * Array.length
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 * ______________________________
 */

var arrOutput = arr.length // @Return : 6


/*
 * Array.at(index)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 * ______________________________
 */

// var arrOutput = arr.at() // @Return : a (By default output will be zero index)
// var arrOutput = arr.at(2) // @Return : B
var arrOutput = arr.at(-1) // @Return : 2 (Negative value find index from last)
// var arrOutput = arr.at(9) // @Return : undefined (If index not found)


/*
 * Array.concat(value0, value1, ... , valueN)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * ______________________________
 */

const arr1 = [3, 4, 5]
const arr2 = [6, 7, 'eight']

var arrOutput = arr.concat(arr1, arr2) // @Return : a,C,B,d,0,2,3,4,5,6,7,eight
var arrOutput = arr.concat('three', 'four') // @Return : a,C,B,d,0,2,three,four


/*
 * Array.copyWithin(target, start, end)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
 *
 * start and end are optional
 *  ______________________________
 */

var arrOutput = arr.copyWithin(0, 4) // @Return : a,C,B,d,0,2,3,4,5,6,7,eight



console.log('exec')




document.getElementById('console').innerHTML = arrOutput
console.log(arrOutput);
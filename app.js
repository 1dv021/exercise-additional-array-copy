/**
 * The starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const ma = require('./src/my-array.js')

let arr = [1, 2, 3]
let newArr = ma.immutablePushNumber(arr, 4)

console.log(arr)
console.log(newArr)
console.log(arr !== newArr)

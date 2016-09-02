/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let ma = require('./src/my-array.js');

let arr = [1, 2, 3];
let newArr = ma.pushToArray(arr, 4);

console.log(arr);
console.log(newArr);
console.log(arr !== newArr);


/**
 * Tests for the pushToArray module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let ma = require('../src/my-array');
let expect = require('chai').expect;

describe('Test error handling', function() {

  it('Must throw a TypeError if no parameter is provided.', function(done) {
    expect(function() {ma.pushToArray();}).to.throw(TypeError);
    done();
  });

  it('Must throw a TypeError if second parameter is not provided.', function(done) {
    expect(function() {ma.pushToArray([1]);}).to.throw(TypeError);
    done();
  });

  it('Must throw a TypeError if the source parameter is not an Array.', function(done) {
    expect(function() {ma.pushToArray('this is wrong', 1);}).to.throw(TypeError);
    done();
  });

  it('Must throw a TypeError if the number parameter is not an Number.', function(done) {
    expect(function() {ma.pushToArray([], 'this is wrong');}).to.throw(TypeError);
    done();
  });

  it('Must throw an Error if the source parameter is an empty array.', function(done) {
    expect(function() {ma.pushToArray([], 1);}).to.throw(Error);
    done();
  });
});

describe('Test that the source array is untouched.', function() {

  it('Must NOT return the same Array object the source parameter refers to.' +
    '(don\'t forget to make a copy of the source array).', function(done) {
    let arr = [1, 2, 3];
    let res = ma.pushToArray(arr, 4);
    expect(arr).to.not.eql(res);
    done();
  });
});

describe('Test that the new array contains the provided number', function() {

  it('Must return a new copy of the source with the the additional number at the end.', function(done) {
    let arr = [1, 2, 3];
    let res = ma.pushToArray(arr, 4);
    expect(res).to.eql([1, 2, 3, 4]);
    done();
  });

  it('Must return a new copy of the source, a small array, with the the additional number at the end.', function(done) {
    let arr = [1];
    let res = ma.pushToArray(arr, 4);
    expect(res).to.eql([1, 4]);
    done();
  });
});

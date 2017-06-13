/**
 * Tests for the my-array module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const ma = require('../src/my-array')
const expect = require('chai').expect

describe('Test error handling', () => {
  it('Must throw a TypeError if no parameter is provided.', done => {
    expect(() => { ma.immutablePushNumber() }).to.throw(TypeError)
    done()
  })

  it('Must throw a TypeError if second parameter is not provided.', done => {
    expect(() => { ma.immutablePushNumber([1]) }).to.throw(TypeError)
    done()
  })

  it('Must throw a TypeError if the source parameter is not an Array.', done => {
    expect(() => { ma.immutablePushNumber('not an array', 1) }).to.throw(TypeError)
    done()
  })

  it('Must throw a TypeError if the number parameter is not a Number.', done => {
    expect(() => { ma.immutablePushNumber([], 'not a number') }).to.throw(TypeError)
    done()
  })
})

describe('Test that the source array is untouched.', () => {
  it('Must NOT return the same Array object the source parameter refers to.' +
    '(don\'t forget to make a copy of the source array).', done => {
    let arr = [1, 2, 3]
    let res = ma.immutablePushNumber(arr, 4)
    expect(arr).to.not.eql(res)
    done()
  })
})

describe('Test that the new array contains the provided number', () => {
  it('Must return a new copy of the source with the the additional number at the end.', done => {
    let arr = [1, 2, 3]
    let res = ma.immutablePushNumber(arr, 4)
    expect(res).to.eql([1, 2, 3, 4])
    done()
  })

  it('Must return a new copy of the source, an array, with the the additional number at the end.', done => {
    let arr = [1]
    let res = ma.immutablePushNumber(arr, 4)
    expect(res).to.eql([1, 4])
    done()
  })

  it('Must return a new copy of the source, an array, with the the additional number at the end.', done => {
    let arr = []
    let res = ma.immutablePushNumber(arr, 4)
    expect(res).to.eql([4])
    done()
  })
})

const { describe, it } = require('mocha')
const { expect } = require('chai')
const { evaluateRegex, InvalidRegexError } = require('../src/util')

describe('Util', () => {
    it('Should throw an error when an unsafe regex is provided', () => {
        const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/
        expect(() => evaluateRegex(unsafeRegex)).to.be.throw(InvalidRegexError, `This ${unsafeRegex} is unsafe!`)
    })
    it('Should return the same regex when it is safe', () => {
        const safeRegex = /^([a-z])$/
        expect(() => evaluateRegex(safeRegex)).to.not.throw
        expect(evaluateRegex(safeRegex)).to.be.ok
    })
})
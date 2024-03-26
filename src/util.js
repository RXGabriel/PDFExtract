const safeRegex = require('safe-regex');

class InvalidRegexError extends Error {
    constructor(message) {
        super(`This ${message} is unsafe!`)
        this.name = 'InvalidRegexError'
    }
}

const evaluateRegex = (regex) => {
    const isSafe = safeRegex(regex)
    if (isSafe) return regex

    throw new InvalidRegexError(regex)
}

module.exports = { evaluateRegex, InvalidRegexError }
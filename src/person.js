const { evaluateRegex } = require('./util')

class Person {
    constructor([nome,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado,
    ]
    ) {
        const firstLetterExpression = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/)
        const formatFirstLetter = (string) => {
            return string.replace(firstLetterExpression, (fullMatch, group1, group2, index) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`
            })
        }
        this.nome = nome
        this.nacionalidade = formatFirstLetter(nacionalidade)
        this.estadoCivil = formatFirstLetter(estadoCivil)
        this.documento = documento.replace(evaluateRegex(/\D/g), '')
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
        this.numero = numero
        this.bairro = bairro.match(evaluateRegex(/(?<=\s)\w+$/)).join()
        this.estado = estado.replace(evaluateRegex(/\.$/), "")
    }
}
module.exports = Person
const transpose = require('./transpose')

const wordSearch = (letters, word) => { 
    const matrixTranspose = transpose(letters);
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = matrixTranspose.map(ls => ls.join(''))
    const backwardsJoin = letters.map(ls => ls.reverse().join(''))

    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of backwardsJoin) {
        if (l.includes(word)) return true
    }
// return false if not found
    return false
}

module.exports = wordSearch


// const wordSearch and include vertical words
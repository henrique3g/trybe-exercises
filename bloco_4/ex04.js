
/**
 * 
 * @param {number} number 
 */
function positiveOrNegative(number) {
    if (number > 0)
        return 'positive'
    if (number < 0)
        return 'negative'

    return 'zero'
}

console.log(`should return "positive": ${positiveOrNegative(3)}`)
console.log(`should return "negative": ${positiveOrNegative(-15)}`)
console.log(`should return "zero": ${positiveOrNegative(0)}`)
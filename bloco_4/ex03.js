const a = 4, b = 10, c = 11;

/**
 * 
 * @param  {...number} numeros 
 */
function maior(...numeros) {
    return numeros.reduce((prev, curr) =>
        prev == null ? curr : curr > prev ? curr : prev, null)
}

console.log(`Maior de a,b,c: ${maior(a,b,c)}`)
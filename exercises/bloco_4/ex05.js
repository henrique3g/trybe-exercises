
/**
 * 
 * @param {number} angleA 
 * @param {number} angleB 
 * @param {number} angleC 
 */
function isTriangle(angleA, angleB, angleC) {
    const sum = angleA + angleB + angleC;
    const isValid = sum == 180
    if (!isValid) console.log('Erro esses anguloes não são de um triangulo valido!')
    return isValid
}

const angleA = 30, angleB = 120, angleC = 30;

console.log(`Triangle is valid: ${isTriangle(angleA, angleB, angleC)}`)
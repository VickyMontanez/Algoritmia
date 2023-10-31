const M = 10;
const m = 7;
function multiplicacionRusa(M, m) {
    let result = 0;
    while (M > 0){
        if (M% 2 !== 0){
            result += m;
        }
        M = Math.floor(M/2);
        m = m * 2;
    }
    return result;
}
console.log(`El resultado de la mútiplicación rusa de ${M} y ${m} es ${multiplicacionRusa(M, m)}`);
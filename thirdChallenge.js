let SM, SN;
function divisor(x){
    let suma = 0;
    for (let k = 1; k <= Math.floor(x/2) +1 ; k++){
        if(x % k == 0){
            suma = suma + k;
        }
    }
    return suma;
}
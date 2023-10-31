/* Exercise 1*/
let fibonacci = (n)=> {
    const map = new Map();
    const formula = (f)=> {
        if (f <= 1) return f;
        if(!map.has(f)) map.set(f, formula(f-1)+ formula(f-2))
        return map.get(f)
    }
    console.log(map);
    return formula(n);
}

console.log(fibonacci(11))

/* Exercise 2*/
let formula = (n) =>{
    if (n <= 1) return { status: 500, message: `El número ${n} No es fibonacci`, sequence: 0};
    let start = 0, next = 1, suma = 1, obj = {sequence: ""}
    for (let i = 2; i < n; i++) {
        obj.sequence += `${suma} `;
        suma = start + next;
        start = next;
        next = suma;
    }
    obj.fibonacci = next;
    return obj;
}

console.log(formula(0));

/* Exercise 3*/

let n = 3
const secuencia = (n) => {
    if ( n <= 1) {
        return n;
    } else {
        return secuencia(n - 1) + secuencia(n -2);
    }
};

for (let i = 0; i< n; i++){
 console.log(secuencia(i));
}
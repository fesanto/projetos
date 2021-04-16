/*function calc(n1, n2, operator) {
    return eval( `${n1} ${operator} ${n2}` );
}

let resultado = calc (3, 2, "*");

console.log(resultado);*/


//arrow function
let calc = (n1, n2, operator) => {
    return eval(`${n1} ${operator} ${n2}`);
}

let resultado = calc (4, 2, "*");

console.log(resultado);

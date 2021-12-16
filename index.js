//
// NO MODIFICAR LOS NOMBRES NI LOS PARAMETROS
// DE LAS FUNCIONES O LOS TESTS DEJARAN DE FUNCIONAR
//

// HELPER FUNCTIONS

function factores(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result;
}


function primos(n) {
    if (n <= 1)
        return [];
    var numArr = primos(n - 1);
    if (primo(n))
        numArr.push(n);
    return numArr;
}


function primo(n) {
    let result = true;
    if (n === 1) {
        return false;
    }
    else if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                result = false;
                break;
            }
        }
    }
    else {
        console.log('Número introducido incorrecto');
    }
    return result;
}




// KATAS

// Utilice los métodos map(), filter() y reduce() si fuera posible

// Utilizando la función factores(N) que devuelve en un arreglo los factores de un número,
// escriba una función que devuelva otro arreglo con la suma de todos los factores
// de todos los números entre 1 y 15 (ambos incluidos)
console.log('Kata 1----------------------------------------------->');

function sumaFactores(n) {
    let sum = [];
    for (let i = 1; i <= n; i++) {
        let total = factores(i).reduce((a, b) => a + b, 0);
        if (total) {
            sum.push(total);
        }
    }
    return sum;
}
let resultFinalSum = sumaFactores(15);
console.log(resultFinalSum);


// Utilizando la función factores(N) que devuelve en un arreglo los factores de un número,
// escriba una función que devuelva otro arreglo con la cantidad de factores pares
// de todos los números entre 1 y 15 (ambos incluidos)
// Utilice los métodos map() y filter() si fuera posible
console.log('Kata 2----------------------------------------------->');

function cantidadFactoresPares(n) {
    let totalPairs = [];
    for (let i = 1; i <= n; i++) {
        let findPairs = factores(i).filter(num => num % 2 == 0);
        if (findPairs) {
            totalPairs.push(findPairs.length)
        }
    }
    return totalPairs;
}
let resultFinalPairs = cantidadFactoresPares(15);
console.log(resultFinalPairs);


// Utilizando la función que determina si un número es primo y la función que extrae
// los factores de un número, calcule la suma de todos los factores primos
// del número 600851475
console.log('Kata 3----------------------------------------------->');

function sumaFactoresPrimos(n) {
    let sum = 0;
    let numberFactors = factores(n);
    numberFactors.map(num => {
        if (primo(num) === true) {
            sum = sum + num;
        }
    })
    return sum;
}

let resultPrimeNumbers = sumaFactoresPrimos(600851475);
console.log(resultPrimeNumbers);


// Dado un arreglo de enteros, escriba una función mayorEntero() que encuentre el mayor entero en el arreglo
// Por ejemplo, en [3,12,11,56,2,78] debería devolver 78
console.log('Kata 4----------------------------------------------->');

const num = [3, 12, 11, 56, 2, 78];

function mayorEntero(arr) {
    let findMajorInteger = arr.filter(num => Number.isInteger(num));
    const largestInteger = Math.max(...findMajorInteger);
    return largestInteger;
}

let resultHighestNumber = mayorEntero(num);
console.log(resultHighestNumber);

// Dado un arreglo de enteros, escriba una función menorEntero() que encuentre
// el menor entero en el arreglo
// Por ejemplo, en [3,12,11,56,2,78] debería devolver 2
console.log('Kata 5----------------------------------------------->');

function menorEntero(arr) {
    let findMinorInteger = arr.filter(num => Number.isInteger(num));
    const smallestInteger = Math.min(...findMinorInteger);
    return smallestInteger;
}

let lowestNumberResult = menorEntero(num);
console.log(lowestNumberResult);

// Dado un arreglo de enteros, escriba una función sinDuplicados() que devuelva
// el arreglo pero sin números duplicados
// Por ejemplo, si el arreglo es [2,33,44,6,17,17,89,44] debería devolver [2,33,44,6,17,89]
console.log('Kata 6----------------------------------------------->');

const numDuplicates = [2, 33, 44, 6, 17, 17, 89, 44];

function sinDuplicados(arrs) {
    let noDuplicates = [];
    for (let arr of arrs) {
        if (!noDuplicates.includes(arr)) {
            noDuplicates.push(arr);
        }
    }
    return noDuplicates;
}

let cleanResult = sinDuplicados(numDuplicates);
console.log(cleanResult);

// Dado un arreglo de enteros, escriba una función duplicados() que devuelva
// un arreglo de los números que están duplicados en el arreglo
// Por ejemplo, si el arreglo es [2,33,44,6,17,17,89,44] debería devolver [17,44]
console.log('Kata 7----------------------------------------------->');

function duplicados(arr) {
    let duplicates = [];
    const copy = [...arr].sort();
    for (let i = 0; i < copy.length; i++) {
        if (copy[i + 1] === copy[i]) {
            duplicates.push(copy[i]);
        }
    }
    return duplicates;
}

let resultDuplicate = duplicados(numDuplicates);
console.log(resultDuplicate);

// La suma de cuadrados de los 10 primeros números naturales es:
//    1**2 + 2**2 + 3**2 ... + 10**2 = 385
// El cuadrado de la suma de los 10 primeros números naturales es:
//    (1 + 2 + 3 + ... + 10)**2 = 55**2 = 3025
// La diferencia entre la suma de cuadrados y el cuadrado de la suma es:
//     3025 - 385 = 2640
// Escriba la función diferenciaCuadrados(N) que calcule esta cantidad
// para los 20 primeros números naturales

function diferenciaCuadrados(n) {
}

// Utilizando la función diferenciaCuadrados(N) del ejercicio anterior,
// calcule las diferencias de cuadrados de los 10 primeros números naturales
// y guárdelas en un arreglo

function diferenciasCuadrados(n) {
}

// Utilizando la función diferenciasCuadrados(N) del ejercicio anterior,
// calcule la suma de las diferencias de cuadrados de los 10 primeros números naturales

function sumaDiferenciasCuadrados(n) {
}

// La suma de cubos de los 10 primeros números naturales es:
//    1**3 + 2**3 + 3**3 ... + 10**3 = 3025
// El cubo de la suma de los 10 primeros números naturales es:
//    (1 + 2 + 3 + ... + 10)**3 = 55**3 = 166375
// La diferencia entre la suma de cubos y el cubo de la suma es:
//     166375 - 3025 = 163350
// Escriba la función diferenciaCubos(n) que calcule esta cantidad
// para los 20 primeros números naturales

function diferenciaCubos(n) {
}

// Utilizando la función diferenciaCubos(N) del ejercicio anterior,
// calcule las diferencias de cubos de los 10 primeros números naturales
// y guárdelas en un arreglo

function diferenciasCubos(n) {
}

// Utilizando la función diferenciasCubos(N) del ejercicio anterior,
// calcule la suma de las diferencias de cubos de los 10 primeros números naturales

function sumaDiferenciasCubos(n) {
}

// En la lista de los números primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 31 podemos ver que 13 es el sexto
// Escriba una función lugarPrimo(p) que dado un lugar p diga que número primo ocupa esta
// posición
// Por ejemplo: lugarPrimo(6) debería devolver 13 y lugarPrimo(3) debería devolver 5
console.log('Kata 14----------------------------------------------->');

function lugarPrimo(p) {
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 31];
    let newArr = [];
    for (let i = -1; i < primeNumbers.length; i++) {
        const num = primeNumbers[i];
        newArr.push(num);
    }
    console.log(newArr[p])
}

let resultPosition = lugarPrimo(10);


// Un número triangular es la suma de todos los números entre 1 y el número (ambos incluidos)
// Por ejemplo: el valor triangular de 7 sería 1+2+3+4+5+6+7 = 28
// Escriba una función numeroTriangular(N) que devuelva el valor triangular de 100
console.log('Kata 15----------------------------------------------->');

function numeroTriangular(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count = count + i
    }
    return count;
}

let resultTriangular = numeroTriangular(100);
console.log(resultTriangular);


// Utilizando la función numeroTriangular(N), escriba la función numerosTriangulares(N)
// que devuelva un arreglo con los valores triangulares para todos los números entre 1 y 10
console.log('Kata 16----------------------------------------------->');

function numerosTriangulares(n) {
    let totalSum = [];
    for (let i = 0; i < n; i++) {
        let arrayNum = i + 1;
        let numTriangular = numeroTriangular(arrayNum);
        totalSum.push(numTriangular);
    }
    return totalSum;
}

let resultTriangularNumbers = numerosTriangulares(10);
console.log(resultTriangularNumbers);

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares pares y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 10
console.log('Kata 17----------------------------------------------->');

function numerosTriangularesPares(n) {
    const result = n.filter(num => num % 2 == 0);
    return result;
}

let pairsTriangular = numerosTriangularesPares(resultTriangularNumbers);
console.log(pairsTriangular);

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares impares y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 10
console.log('Kata 18----------------------------------------------->');

function numerosTriangularesImpares(n) {
    const result = n.filter(num => num % 2 != 0);
    return result;
}

let oddTriangular = numerosTriangularesImpares(resultTriangularNumbers);
console.log(oddTriangular);

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares primos y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 100
console.log('Kata 19----------------------------------------------->');


function numerosTriangularesPrimos(n) {
    let result = [];
    n.filter(num => {
        if (primo(num) === true) {
            result.push(num);
        }
    })
    return result;
}

let triangularPrimeNumbers = numerosTriangularesPrimos(resultTriangularNumbers);
console.log(triangularPrimeNumbers);

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares no primos y guárdelos en un arreglo
// Utilice si es posible el método filter()
console.log('Kata 20----------------------------------------------->');

function numerosTriangularesNoPrimos(n) {
    let result = [];
    n.filter(num => {
        if (primo(num) === false) {
            result.push(num);
        }
    })
    return result;
}

let numbersNoPrime = numerosTriangularesNoPrimos(resultTriangularNumbers);
console.log(numbersNoPrime);

// Utilizando la función numerosTriangularesNoPrimos(N),
// calcule los factores de cada uno de los valores triangulares y guárdelos en un arreglo
// Llame a la función factoresTriangularesNP(N)
// Utilice si es posible el método map()
console.log('Kata 21----------------------------------------------->');


function factoresTriangularesNP(n) {
    let total = [];
    const findFactors = n.map(num => {
        return factores(num);
    })
    for (let i = 0; i < findFactors.length; i++) {
        const element = findFactors[i];
        total.push(element);
        total.splice(3, i)
    }
    return total;
}

let triangularFactors = factoresTriangularesNP(numbersNoPrime);
console.log(triangularFactors);

// Utilizando la función factoresTriangularesNP(N), calcule el cuadrado
// de la suma de los factores triangulares y guárdelos en un arreglo
// Llame a la función totalTriangularesNP(N)
// Utilice si es posible los métodos map() y reduce()
console.log('Kata 22----------------------------------------------->');

function totalTriangularesNP(n) {
    const allNumbers = n.map(arr => {
        let sum = arr.reduce((a, b) => a + b, 0);
        let squareNumber = Math.pow(sum, 2);
        return squareNumber;
    })
    return allNumbers;

}

let resultSumSquares = totalTriangularesNP(triangularFactors);
console.log(resultSumSquares);

// Utilizando la función totalTriangularesNP(N), calcule la suma de todos
// los valores del arreglo
// Utilice si es posible el método reduce()

function sumaTriangularesNP(n) {
}

// Escriba una función extraeDigitos(s), donde s es una cadena de caracteres compuesta
// por dígitos y que devuelva un arreglo de números enteros a partir de ellos
// Por ejemplo extraeDigitos(“12345”) debe devolver [1,2,3,4,5]
// El método split() de una cadena pasándole como argumento una cadena vacía,
// devuelve los caracteres de la cadena en forma de arreglo. “abc”.split(“”)
// devuelve [“a”,”b”,”c”]
// Si es posible utilice el método map() y la función parseInt() para convertir
// cada dígito en un número entero

function extraeDigitos(s) {
}

// Usando la función extraeDigitos(s) del ejercicio anterior,
// cree la función sumaDigitos(s) que devuelva la suma de los dígitos
// de un número representado como cadena de caracteres
// Por ejemplo sumaDigitos(“32768”) es 3+2+7+6+8 = 26
// Utilice si es posible el método reduce()

function sumaDigitos(s) {
}

// Cree una función contadorLetras(s) que dado un cadena de caracteres s
// devuelva un arreglo de objetos con dos propiedades: caracter y cantidad
// Por ejemplo: contadorLetras(“aaabbcdf”) deberá devolver:
//  [{caracter:”a”, cantidad:3},
//   {caracter:”b”, cantidad:2},
//   {caracter:”c”,cantidad:1},
//   { caracter:”d”,cantidad:1} ,
//   { caracter:”f”,cantidad:1}]
// Utilice el método split(“”) para convertir una cadena en un arreglo de caracteres

function contadorLetras(s) {
}

// Cree una función contadorDigitos(s) que dado un cadena de caracteres s devuelva
// un arreglo de objetos con dos propiedades: digito y cantidad
// Por ejemplo: contadorDigitos(“12224433”) deberá devolver
// [{digito:”1”, cantidad:1},
//  {digito:”2”, cantidad:3},
//  {digito:”4”,cantidad:2},
//  {digito:”3”,cantidad:2}]
// Utilice el método split(“”) para convertir una cadena en un arreglo de caracteres

function contadorDigitos(s) {
}
/* 
export {
    sumaFactores,
    cantidadFactoresPares,
    sumaFactoresPrimos,
    mayorEntero,
    menorEntero,
    sinDuplicados,
    duplicados,
    diferenciaCuadrados,
    diferenciasCuadrados,
    sumaDiferenciasCuadrados,
    diferenciaCubos,
    diferenciasCubos,
    sumaDiferenciasCubos,
    lugarPrimo,
    numeroTriangular,
    numerosTriangulares,
    numerosTriangularesPares,
    numerosTriangularesImpares,
    numerosTriangularesPrimos,
    numerosTriangularesNoPrimos,
    factoresTriangularesNP,
    totalTriangularesNP,
    sumaTriangularesNP,
    extraeDigitos,
    sumaDigitos,
    contadorLetras,
    contadorDigitos,
};
 */
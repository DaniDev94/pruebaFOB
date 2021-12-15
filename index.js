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
    if (n<=1)
        return [];

    var numArr = primos(n - 1);

    if (primo(n))
        numArr.push(n);

    return numArr;
}

function primo(n) {
    let result = true;

    if (n ===1) {
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

function sumaFactores(n) {
}

// Utilizando la función factores(N) que devuelve en un arreglo los factores de un número,
// escriba una función que devuelva otro arreglo con la cantidad de factores pares
// de todos los números entre 1 y 15 (ambos incluidos)
// Utilice los métodos map() y filter() si fuera posible

function cantidadFactoresPares(n) {
}

// Utilizando la función que determina si un número es primo y la función que extrae
// los factores de un número, calcule la suma de todos los factores primos
// del número 600851475

function sumaFactoresPrimos(n) {
}

// Dado un arreglo de enteros, escriba una función mayorEntero() que encuentre el mayor entero en el arreglo
// Por ejemplo, en [3,12,11,56,2,78] debería devolver 78

function mayorEntero(arr) {
}

// Dado un arreglo de enteros, escriba una función menorEntero() que encuentre
// el menor entero en el arreglo
// Por ejemplo, en [3,12,11,56,2,78] debería devolver 2

function menorEntero(arr) {
}

// Dado un arreglo de enteros, escriba una función sinDuplicados() que devuelva
// el arreglo pero sin números duplicados
// Por ejemplo, si el arreglo es [2,33,44,6,17,17,89,44] debería devolver [2,33,44,6,17,89]

function sinDuplicados(arr) {
}

// Dado un arreglo de enteros, escriba una función duplicados() que devuelva
// un arreglo de los números que están duplicados en el arreglo
// Por ejemplo, si el arreglo es [2,33,44,6,17,17,89,44] debería devolver [17,44]

function duplicados(arr) {
}

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

function lugarPrimo(p) {
}

// Un número triangular es la suma de todos los números entre 1 y el número (ambos incluidos)
// Por ejemplo: el valor triangular de 7 sería 1+2+3+4+5+6+7 = 28
// Escriba una función numeroTriangular(N) que devuelva el valor triangular de 100

function numeroTriangular(n) {
}

// Utilizando la función numeroTriangular(N), escriba la función numerosTriangulares(N)
// que devuelva un arreglo con los valores triangulares para todos los números entre 1 y 10

function numerosTriangulares(n) {
}

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares pares y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 10

function numerosTriangularesPares(n) {
}

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares impares y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 10

function numerosTriangularesImpares(n) {
}

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares primos y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 100

function numerosTriangularesPrimos(n) {
}

// Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares no primos y guárdelos en un arreglo
// Utilice si es posible el método filter()

function numerosTriangularesNoPrimos(n) {
}

// Utilizando la función numerosTriangularesNoPrimos(N),
// calcule los factores de cada uno de los valores triangulares y guárdelos en un arreglo
// Llame a la función factoresTriangularesNP(N)
// Utilice si es posible el método map()

function factoresTriangularesNP(n) {
}

// Utilizando la función factoresTriangularesNP(N), calcule el cuadrado
// de la suma de los factores triangulares y guárdelos en un arreglo
// Llame a la función totalTriangularesNP(N)
// Utilice si es posible los métodos map() y reduce()

function totalTriangularesNP(n) {
}

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

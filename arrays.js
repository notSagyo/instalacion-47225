// MODIFICAN =================================================================//
// Agrega elemento al final
[1, 2, 3].push(4); //=> [1, 2, 3, 4]
// Elimina ultimo elemento
[1, 2, 3].pop(); //=> [1, 2]
// Elimina primer elemento
[1, 2, 3].shift(); //=> [2, 3]
// Agrega elemento al principio
[1, 2, 3].unshift(0); //=> [0, 1, 2, 3]
// Invierte el array
[1, 2, 3].reverse(); //=> [3, 2, 1]
// Ordena el array
[1, 3, 2].sort(); //=> [1, 2, 3]
// Quita desde elemento X, Y cantidad
[1, 2, 3].splice(0, 2); //=> [3]

// NO MODIFICAN ==============================================================//
// Une un array con otro
[1, 2, 3].concat([4, 5, 6]); //=> [1, 2, 3, 4, 5, 6]
// Une todos los elementos de un array y devuelve una string
[1, 2, 3].join(' - '); // "1 - 2 -3"

// ITERACION =================================================================//
// DEVUELVE UN ARRAY =================//
// Devuelve un nuevo array de la misma longitud
[1, 2, 3].map((el) => el * 2); //=> [2, 4, 6]
// Devuelve un nuevo array que cumpla con ciertas condiciones
[1, 2, 3].filter((el) => el > 1); //=> [2, 3]
// Itera un array, y nos devuelve un único valor
[1, 2, 3].reduce((a, el) => a + el, 0); //=> 6

// DEVUELVE UN UNICO VALOR ===========//
// Devuelve el primer elemento que cumpla con la condicion
[1, 2, 3].find((el) => el > 1); //=> 2
// Devuelve true si algún elemento cumple con la condicion
[1, 2, 3].some((el) => el == 2); //=> true
// Devuelve true si TODOS los elementos cumplen con la condicion
[1, 2, 3].every((el) => el > 2); //=> false;
// Devuelve true si el array incluye el elemento que le pasamos
[1, 2, 3].includes(2); //=> true

// NO DEVUELVE NADA ==================//
// Itera un array
[1, 2, 3].forEach((el) => console.log(el)); //=> undefined


    // Declaración e inicialización de la variable 'prices' como un array que contiene números, una cadena, y un booleano.
    let prices = [1, 2, 2, 1, 1, 212, 'hola', true];
    // Agregando nuevos elementos al final del array 'prices'.
    prices.push(121212);
  
    // Declaración e inicialización de la variable 'products' como un array que contiene una cadena y un booleano.
    let products = ['hola', true];
    // Agregando un nuevo elemento al final del array 'products'.
    products.push(false);
  
    // Declaración e inicialización de la variable 'mixed' como un array que puede contener números, cadenas, booleanos u objetos.
    let mixed: (number | string | boolean | Object)[] = ['hola', true];
    // Agregando nuevos elementos al final del array 'mixed'.
    mixed.push(12);
    mixed.push('as');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);
  
    // Declaración e inicialización de la variable 'numbers' como un array de números.
    let numbers = [1, 2];
    // Aplicando la función map al array 'numbers', multiplicando cada elemento por 2 (sin modificar el array original).
    numbers.map(item => item * 2);
  
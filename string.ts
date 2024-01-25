// Utilizando una función de flecha sin nombre (arrow function) y un bloque de código autoejecutable.
(() => {
    // Declaración e inicialización de la variable 'productTitle' con un valor de cadena.
    let productTitle = 'My amazing product';
    // Asignación de un nuevo valor de cadena a la variable 'productTitle'.
    productTitle = 'My amazing product changed';
    // Imprimir en la consola el valor actual de 'productTitle'.
    console.log('productTitle', productTitle);
  
    // Declaración e inicialización de la constante 'productDescription' con un valor de cadena.
    const productDescription = "I'm bla bla ba bla bl s asasas";
    // Imprimir en la consola el valor actual de 'productDescription'.
    console.log('productDescription', productDescription);
  
    // Declaración e inicialización de las variables 'productPrice' y 'isNew'.
    let productPrice = 100;
    let isNew: boolean = false;
  
    // Creación de una cadena de texto multilínea utilizando template literals para resumir la información.
    const summary = `
      title: ${productTitle}
      description: ${productDescription}
      price: ${productPrice}
      isNew: ${isNew}
    `;
  
    // Imprimir en la consola el resumen creado.
    console.log(summary);
  
    // Declaración de una constante 'myString' con el tipo de dato cadena y un valor de cadena vacía.
    const myString: string = '';
  })();
  
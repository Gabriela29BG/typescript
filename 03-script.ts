
    // Declaración e inicialización de la variable productTitle
    let productTitle = 'My amazing product';
    
    // Comentadas líneas que asignan diferentes tipos de valores a productTitle
    // productTitle = null;
    // productTitle = () => {};
    // productTitle = 123;
  
    // Modificación del valor de productTitle
    productTitle = 'My amazing product changed';
  
    // Impresión del valor de productTitle en la consola
    console.log('productTitle', productTitle);
  
    // Declaración e inicialización de la constante productDescription
    const productDescription = "I'm bla bla ba bla bl s asasasas";
  
    // Impresión de productDescription en la consola
    console.log('productDescription', productDescription);
  
    // Declaración e inicialización de las variables productPrice e isNew
    let productPrice = 100;
    let isNew: boolean = false;
  
    // Creación de una cadena de plantilla (summary) con interpolación de variables
    const summary = `
      title: ${productTitle}
      description: ${productDescription}
      price: ${productPrice}
      isNew: ${isNew}
    `;
  
    // Impresión de la cadena de plantilla summary en la consola
    console.log(summary);
  
    // Declaración e inicialización de la constante myString con un tipo de dato de cadena vacía
    const myString: string = '';

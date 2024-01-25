
    // Declaración e inicialización de la variable 'productPrice' con el valor 100.
    let productPrice = 100;
    // Asignación de un nuevo valor (12) a la variable 'productPrice'.
    productPrice = 12;
    // Imprimir en la consola el valor actual de 'productPrice'.
    console.log('productPrice', productPrice);
  
    // Declaración e inicialización de la variable 'customerAge' con el tipo de dato número y el valor 28.
    let customerAge: number = 28;
    // Incremento en 1 al valor de 'customerAge'.
    customerAge = customerAge + 1; // Alternativamente, podrías usar: customerAge += 1;
    // Imprimir en la consola el valor actual de 'customerAge'.
    console.log('customerAge', customerAge);
  
    // Declaración de la variable 'productInStock' sin inicializarla.
    let productInStock: number; //= 0
    // Imprimir en la consola el valor actual de 'productInStock' (que será 'undefined').
    console.log('productInStock', productInStock);
  
    // Condición que verifica si 'productInStock' es mayor que 10 (nota: 'productInStock' es 'undefined' en este punto).
    if (productInStock > 10) {
      console.log('is greater');
    }
  
    // Conversión de una cadena a un número y asignación del resultado a la variable 'discount'.
    let discount = parseInt('100');
    // Imprimir en la consola el valor actual de 'discount'.
    console.log('discount', discount);
  
    // Condición que verifica si 'discount' es menor o igual a 200.
    if (discount <= 200) {
      console.log('apply');
    } else {
      console.log('not apply');
    }
  
    // Declaración e inicialización de la variable 'hex' con un valor hexadecimal.
    let hex = 0xfff;
    // Imprimir en la consola el valor actual de 'hex'.
    console.log('hex', hex);
  
    // Declaración e inicialización de la variable 'bin' con un valor binario.
    let bin = 0b1010; // Representa el número decimal 10.
    // Imprimir en la consola el valor actual de 'bin'.
    console.log('bin', bin);
  
    // Declaración de una constante 'myNumber' con el tipo de dato número y el valor 10.
    const myNumber: number = 10;
  
  
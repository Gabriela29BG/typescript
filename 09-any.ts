
    // Declaración de la variable 'myDynamicVar' con el tipo de dato 'any' para permitir diferentes tipos de valores.
    let myDynamicVar: any;
  
    // Asignación de diferentes valores a 'myDynamicVar'.
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
  
    // Asignación de una cadena a 'myDynamicVar'.
    myDynamicVar = 'Hola';
    // Conversión de tipo utilizando 'as' para tratar 'myDynamicVar' como una cadena y llamada a toLowerCase().
    const rta = (myDynamicVar as string).toLowerCase();
    // Imprimir en la consola el resultado.
    console.log(rta);
  
    // Asignación de un número a 'myDynamicVar'.
    myDynamicVar = 1212;
    // Conversión de tipo utilizando '<number>' para tratar 'myDynamicVar' como un número y llamada a toFixed().
    const rta2 = (<number>myDynamicVar).toFixed();
    // Imprimir en la consola el resultado.
    console.log(rta2);

  
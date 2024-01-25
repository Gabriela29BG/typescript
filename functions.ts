(() => {
    // Definición de un tipo literal 'Sizes' que puede tener valores 'S', 'M', 'L' o 'XL'.
    type Sizes = 'S' | 'M' | 'L' | 'XL';
  
    // Función 'createProductToJson' que toma varios parámetros y devuelve un objeto JSON.
    function createProductToJson(
      title: string,
      createdAt: Date,
      stock: number,
      size: Sizes
    ) {
      return {
        title,
        createdAt,
        stock,
        size
      };
    }
  
    // Llamada a 'createProductToJson' con valores específicos.
    const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.stock);
    console.log(producto1.size);
  
    // Función 'createProductToJsonV2' que es similar, pero 'size' es opcional.
    const createProductToJsonV2 = (
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    ) => {
      return {
        title,
        createdAt,
        stock,
        size
      };
    };
  
    // Llamada a 'createProductToJsonV2' sin proporcionar un valor para 'size'.
    const producto2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
    console.log(producto2.size);
  })();
  
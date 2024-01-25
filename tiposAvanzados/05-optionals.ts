// Función que crea un objeto de producto con propiedades opcionales
//nuevo operador y los prmeros opcionales van al final
export const createProduct = (
    id: string | number,
    isNew?: boolean, // Parámetro opcional, con un valor predeterminado de 'undefined'
    stock?: number,  // Parámetro opcional, con un valor predeterminado de 'undefined'
  ) => {
    return {
      id,
      // Si 'stock' es 'undefined', utiliza el valor predeterminado '10'
      stock: stock ?? 10,
      // Si 'isNew' es 'undefined', utiliza el valor predeterminado 'true'
      isNew: isNew ?? true
    }
  }
  
  // Ejemplos de llamadas a 'createProduct'
  
  // Crea un producto con id: 1, isNew: true, stock: 12
  const p1 = createProduct(1, true, 12);
  console.log(p1);
  
  // Crea un producto con id: 1, isNew: true (valores predeterminados para stock y isNew)
  const p2 = createProduct(1);
  console.log(p2);
  
  // Crea un producto con id: 1, isNew: false, stock: 0
  const p3 = createProduct(1, false, 0);
  console.log(p3);
  
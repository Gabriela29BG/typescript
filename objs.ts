(() => {
    // Tipo literal 'Sizes' que puede tener valores 'S', 'M', 'L' o 'XL'.
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    
    // Tipo 'Product' que describe la estructura de un objeto de producto.
    type Product = {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    };
  
    // Array 'products' que contiene elementos de tipo 'Product'.
    const products: Product[] = [];
  
    // Función 'addProduct' que acepta un objeto de tipo 'Product' y lo agrega al array 'products'.
    const addProduct = (data: Product) => {
      products.push(data);
    }
  
    // Llamadas a 'addProduct' con diferentes objetos de productos.
    addProduct({
      title: 'Pro1',
      createdAt: new Date(1993, 1, 1),
      stock: 12
    });
  
    addProduct({
      title: 'Pro2',
      createdAt: new Date(1993, 1, 1),
      stock: 12,
      size: 'XL'
    });
  
    // Imprimir en la consola el array 'products'.
    console.log(products);
  
    // Intento de agregar un objeto directamente al array sin cumplir con la estructura de 'Product'.
    products.push({
      title: 'Prod3',
      createdAt: new Date(1992, 1, 1),
      stock: 12,
      size: 'XL'
    });
  })();
  
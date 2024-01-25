(() => {
    // Función 'login' que acepta un objeto con propiedades 'email' y 'password'.
    const login = (data: { email: string, password: number }) => {
      console.log(data.email, data.password);
    }
  
    // Llamada a 'login' proporcionando un objeto con 'email' y 'password'.
    login({
      email: 'nico@nico.co',
      password: 12121212
    });
  
    // Tipo literal 'Sizes' que puede tener valores 'S', 'M', 'L' o 'XL'.
    type Sizes = 'S' | 'M' | 'L' | 'XL';
  
    // Array 'products' que contiene elementos de tipo 'any'.
    const products: any[] = [];
  
    // Función 'addProduct' que acepta un objeto con propiedades específicas y lo agrega al array 'products'.
    const addProduct = (data: {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    }) => {
      products.push(data);
    }
  
    // Llamadas a 'addProduct' con diferentes objetos de productos.
    addProduct({
      title: 'Pro1',
      createdAt: new Date(1993, 1, 1),
      stock: 12
    });
  
    addProduct({
      title: 'Pro1',
      createdAt: new Date(1993, 1, 1),
      stock: 12,
      size: 'XL'
    });
  
    // Imprimir en la consola el array 'products'.
    console.log(products);
  })();
  
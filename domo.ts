(async () => {
    const myCart = [];
    let products = []; // Corregido: Cambiado 'const' a 'let' para que se pueda modificar.
    const limit = 2;
  
    async function getProducts() {
      const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
        method: 'GET'
      });
      const data = await rta.json();
      // Corregido: Se utiliza 'push' para agregar elementos al array 'products'.
      products = products.concat(data);
    }
  
    function getTotal() {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        // Corregido: La propiedad correcta es 'price', no 'prize'.
        total += products[i].price;
      }
      return total;
    }
  
    function addProduct(index) {
      if (getTotal() <= limit) {
        // Corregido: Se utiliza 'push' para agregar elementos al array 'myCart'.
        myCart.push(products[index]);
      }
    }
  
    await getProducts();
    addProduct(1);
    addProduct(2);
    const total = getTotal();
    console.log(total);
  
    const person = {
      name: 'Nicolas',
      lastName: 'Molina'
    }
    // Comentado: Esta operación no tiene sentido y podría causar resultados inesperados.
    // const rta = person + limit;
    // console.log(rta);
  })();
  
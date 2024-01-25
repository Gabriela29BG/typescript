// Definición de un tipo para tallas
type Sizes = 'S' | 'M' | 'L' | 'XL';

// Definición de un tipo para el ID del usuario
type userId = string | number;

// Interfaz para la estructura de un producto
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes; // Talla opcional
}

// Array para almacenar productos
const products: Product[] = [];

// Agrega un producto al array de productos
products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

// Función para agregar un producto al array de productos
const addProduct = (data: Product) => {
  products.push(data);
}

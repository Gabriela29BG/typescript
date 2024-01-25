// Enumeración (enum) que define los roles posibles de un usuario
enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer",
  }
  
  // Tipo (type) que representa la estructura de un usuario
  type User = {
    username: string;
    role: ROLES; // El rol debe ser uno de los valores definidos en el enum ROLES
  }
  
  // Objeto que representa a un usuario concreto
  const nicoUser: User = {
    username: 'nicobytes',
    role: ROLES.SELLER // Asigna el rol SELLER al usuario
  }
  
// Importa el tipo 'User' y el enum 'ROLES' desde el archivo '01-enum'
import { User, ROLES } from './01-Enum';

// Crea un objeto de usuario con un nombre de usuario y un rol
const currentUser: User = {
  username: 'nicobytes',
  role: ROLES.CUSTOMER
}

// Función que verifica si el rol del usuario actual es 'ADMIN'
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

// Llama a la función 'checkAdminRole' y muestra el resultado en la consola
const rta = checkAdminRole();
console.log('checkAdminRole', rta);

// Función que verifica si el rol del usuario actual es igual a uno de los roles proporcionados
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

// Llama a la función 'checkRole' con roles 'ADMIN' y 'SELLER', muestra el resultado en la consola
const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

// Función que verifica si el rol del usuario actual está incluido en el array de roles proporcionado
export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

// Llama a la función 'checkRoleV2' con roles 'ADMIN' y 'SELLER', muestra el resultado en la consola
const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);

// Función que verifica si el rol del usuario actual está incluido en los roles proporcionados como argumentos variables
export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

// Llama a la función 'checkRoleV3' con roles 'ADMIN', 'SELLER' y 'CUSTOMER', muestra el resultado en la consola
const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV3', rta4);

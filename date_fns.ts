// Importación de funciones específicas ('subDays' y 'format') desde la biblioteca 'date-fns'.
import { subDays, format } from 'date-fns';

// Creación de un objeto de fecha representando el 28 de febrero de 1998.
const date = new Date(1998, 1, 28); // 0 = enero, 1 = febrero

// Uso de la función 'subDays' para restar 30 días a la fecha original.
const rta = subDays(date, 30);

// Formateo de la fecha resultante utilizando la función 'format'.
// El formato especificado es 'yyyy/MM/dd'.
const str = format(rta, 'yyyy/MM/dd');

// Impresión del resultado formateado en la consola.
console.log(str);

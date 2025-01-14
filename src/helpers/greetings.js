/**
 * funcion que retorna un saludo aleatorio.
 * 
 * @returns {string} - Random greeting
 */
export const greetings = () => {
    const greetings = [
      '¡Hola de nuevo!, ',
      '¡Bienvenido de vuelta!, ',
      '¡Hola!, ',
      '¡Me alegra verte!, ',
      '¡Hey!, todo bien '];
    return greetings[Math.floor(Math.random() * greetings.length)];
};
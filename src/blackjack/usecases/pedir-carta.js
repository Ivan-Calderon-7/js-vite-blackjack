/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) throw new Error('deck es obligatorio como un arreglo de string y debe de contener elementos');
    const carta = deck.pop();
    return carta;
}
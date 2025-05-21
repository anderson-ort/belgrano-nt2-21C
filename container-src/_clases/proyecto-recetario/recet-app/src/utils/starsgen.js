export const renderEstrellas = (puntos) => {
    const max = 5
    return '★'.repeat(puntos) + '☆'.repeat(max - puntos)
}

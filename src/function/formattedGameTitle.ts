export const formattedtitle = (sentence: string) => {
    return sentence
      .split(" ") // Cria um array Divido por palavras
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "); // Junta as palavras de volta em uma frase
}
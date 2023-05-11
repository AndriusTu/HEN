export function capitalizeFirstLetter(word) {
  return word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
}

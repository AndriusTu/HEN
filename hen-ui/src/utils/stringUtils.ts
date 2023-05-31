export function capitalizeFirstLetter(word) {
  return word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
}

export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const lithuanianPhoneRegex = /^(\+3706|86)(\d{7})$/;

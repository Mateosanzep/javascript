const regresaTrue = () => {
  console.log("regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("regresa false");
  return false;
};

console.warn("not a la negacion");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn("and");
console.log(true && false);

console.warn("or");
console.log(true || false);

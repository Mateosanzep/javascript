const carros = ["ford", "toyota", "honda", "mazda"];

let i = 0;

while (carros[1]) {
  if (i === 1) {
    i++;
    continue;
  }

  console.log(carros[i]), i++;
}

console.warn("do while");
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
{
}

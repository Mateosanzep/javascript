const heroes = ["batman", "superman", "spider man", "aquaman"];

console.warn("for");

for (let i = 0; i < heroes.length; i++) {
  // const element = array[index];
  console.log(heroes[i]);
}

console.warn("for in");
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("for of");
for (let i of heroes) {
  console.log(i);
}

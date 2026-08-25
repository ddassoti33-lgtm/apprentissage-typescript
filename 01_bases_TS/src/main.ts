let nom: string = "John Doe";
let age: number = 30;
let isStudent: boolean = true;
console.log(`Name: ${nom}, Age: ${age}, Is Student: ${isStudent}`);
console.log(`Type of nom: ${typeof nom}, Type of age: ${typeof age}, Type of isStudent: ${typeof isStudent}`);
console.log(nom, age, isStudent);
//declaration d'objet
const personne: { nom: string; age: number; isStudent: boolean } = {
  nom: "Jane Doe",
  age: 25,
  isStudent: false,
};
console.log(personne);
//declaration d'array
const nombres: number[] = [1, 2, 3, 4, 5];
console.log(nombres);

const fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits);

//declaration d'array avec type any
const mixedArray: any[] = [1, "two", true, { key: "value" }];
console.log(mixedArray);

//declaration d'array avec type tuple
const tupleExample: [string, number, boolean] = ["Hello", 42, true];
console.log(tupleExample);
/* un tuple est un type de données qui permet de stocker un nombre fixe d'éléments de types 
 différents dans un tableau. Dans l'exemple ci-dessus, le tuple `tupleExample` contient 
 une chaîne de caractères, un nombre et un booléen. Les tuples sont utiles lorsque vous souhaitez
  représenter des ensembles de données hétérogènes avec une structure fixe.
*/

//declaration d'array avec type enum
enum Color {
  Red,
  Green,
  Blue,
}
const colorArray: Color[] = [Color.Red, Color.Green, Color.Blue];
console.log(colorArray);

//declation de fonction avec type de retour
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));

//declaration de fonction avec type de retour void
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet("Alice");

//declaration de fonction avec type de retour any

// ca permet de retourner n'importe quel type de valeur, mais il est préférable
// d'éviter l'utilisation de `any` autant que possible pour bénéficier de la sécurité de type 
// offerte par TypeScript.
function getRandomValue(): any {
  const values: any[] = [42, "Hello", true, { key: "value" }];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}
console.log(getRandomValue());
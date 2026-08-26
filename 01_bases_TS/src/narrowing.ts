//le narrowing est un processus dans lequel TypeScript réduit le type d'une variable à un type
// plus spécifique en fonction du contexte dans lequel elle est utilisée. Cela permet d'améliorer 
// la sécurité de type et de fournir des informations plus précises sur les valeurs manipulées dans
// le code.
//Exemple de narrowing avec un type union
function print_Id(id: number | string) {
  if (typeof id === "string") {
    console.log(`String ID: ${id}`);
  } else {
    console.log(`Number ID: ${id}`);
  }
}
print_Id(123); // Output: Number ID: 123
//narrowing avec instanceof
class Dog {
  bark() {
    const msg = new SpeechSynthesisUtterance/*("bienvenue sur le portofolio de Dieudonné, Dévéloppeur web junior")*/;
    msg.lang = "fr-CA"
    msg.rate = 1
    msg.pitch = 1
    speechSynthesis.speak(msg);
  }
}
function make_Sound(animal: Dog | string) {
  if (animal instanceof Dog) {
    animal.bark();
  }
}
const myDog = new Dog();
make_Sound(myDog); // Output: Woof!

/*const voices = speechSynthesis.getVoices();

voices.forEach(voice => {
  console.log(voice.name, voice.lang);
});*///pour voir les langues dont l'ordinateur dispose

//narrowing avec tableau
function Nom(nom: string| string[]){
  if(typeof nom ==="string")
    console.log("ch")
}
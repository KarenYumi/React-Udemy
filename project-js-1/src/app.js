function greetUser (names, message = "boa sorte", sorrizo = "*-*"){
    console.log(sorrizo);
    console.log("Hi, I'm " + names + ", " + message);
}
greetUser("Max");
greetUser("Julia", "Adios", ":)");

console.log("--------------------");


function createUser (names, message = "boa sorte"){
    return "Hi, I am " + names + ", " + message;
}
const greeting = createUser("Maria");
console.log(greeting);

console.log("--------------------");


function combine(a, b, c){
    return a*b/c;
}
const teste = combine(10,2,2);
console.log(teste);

console.log("--------------------");

const user = {
    name: "Maximus",
    age: 34,
    greet(){
        console.log("Hello!!");
        console.log(this.age);
    }
};
console.log(user.name);
user.greet();

console.log("--------------------");

const hobbies=["sports", "cooking", "reading"];
console.log(hobbies[0]);
hobbies.push("working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "cooking");
console.log("Posição no array do hobbie cooking: " + index);

const edited = hobbies.map((item) => item + "!!!");
console.log(edited);

const editedhobbies = hobbies.map((item) => ({text: item}));
console.log(editedhobbies);

console.log("--------------------");

function transformToObjects(numberArray) {
    return numberArray.map((item) => ({val:item}));
}
console.log(transformToObjects([1,2,3]));

console.log("--------------------");

//const userNameData = ["Maximillian", "Hernandes"];
//const firstName = userNameData[0];
//const lastName = userNameData[1]; versão masi simples ↓
const [firstName, lastName] = ["Maximillian", "Hernandes"];
const {name: userName, age} = { //userName um alias para  name
    name:"Max",
     age: 34
};

console.log("--------------------");

const password = prompt("Your Password");

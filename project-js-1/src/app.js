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
console.log(firstName);

console.log("--------------------");

const newhobbie = ["Reading"];
const merge = [...hobbies, ...newhobbie];
console.log(merge);

console.log("--------------------");

const password = prompt("Your Password"); //aparece um pop up
if (password === "Hello") {
    console.log("OLAAA");
}else if(password === "hello"){
    console.log("OIIIII");
}else{
    console.log("Acesso negado")
}

console.log("--------------------");

for (const hobby of hobbies){
    console.log(hobby); //passa as inof de hobbies para hobby
}

console.log("--------------------");

function fim(){
    console.log("FIM");
}
const fim2 = ()=>{
    console.log("ACABOUU");
}
//setTimeout(fim, 2000);
//setTimeout(fim2, 3000);
//setTimeout(()=> {
//    console.log("ACABOU FINALMENTE");
//}, 4000);

function greeter(greetFn){
    greetFn();
}
greeter(()=> console.log("Hi"));

console.log("--------------------");

let userMessage = "Hello";
userMessage = userMessage.concat("!!!");
console.log(userMessage);
console.log("--------------------");
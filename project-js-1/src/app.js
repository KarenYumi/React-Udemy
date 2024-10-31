function greetUser (names, message = "boa sorte", sorrizo = "*-*"){
    console.log(sorrizo);
    console.log("Hi, I'm " + names + ", " + message);
}
greetUser("Max");
greetUser("Julia", "Adios", ":)");


function createUser (names, message = "boa sorte"){
    return "Hi, I am " + names + ", " + message;
}
const greeting = createUser("Maria");
console.log(greeting);


function combine(a, b, c){
    return a*b/c;
}
const teste = combine(10,2,2);
console.log(teste);
let text = "Hello, world!";

for (let i = 1; i <= 10; i++) {
    console.log(text + " " + i);
}

////////////////////////////

let numArray = [];

for (let i = 0; i <= 10; i++) {
    numArray.push(i);
}
console.log(numArray);

///////////////////////////

const names = ["Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio"];

for (let i = 0; i <= names.length; i++) {
    let person = names[i];
    console.log(person);
}

///////////////////////////

let retArray = [];

for (let i = 1; i <= 100 ; i++) {
    retArray.push(`image_${i}.jpg`);
}
console.log(retArray);

///////////////////////////

let counter = 1;

do{
    document.write(`<p>The number is ${counter}</p>`);
    counter = counter +1;
}while (counter<= 5)




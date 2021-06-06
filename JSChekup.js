let a;
let b;

a = "string";
b = 13;

let c = true;

let user = {
    name: "Ted",
    age: 20,
    isWorking: true,
};

let rep = '-'.repeat(20);

let array = [a, b, c];
for (i of array){
    console.log(i);
}

console.log(rep);

for (let i of Object.entries(user)){
    console.log(i);
}

console.log(rep);

let say = function () {
    console.log("Hello World!");
};

say();

console.log(rep);
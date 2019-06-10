// basic types

let x = 1;
let s = 'strings';
let sx = `string of ${x}`;
let state = true | false;
let numbers = [1, 2, 3, 4];
let dict = {'key': 5.2, 3: "string", s};

// undefined, null, object and symbols

const x = 2;
x = 3;

const v = [1, 2, 3];
v[1] = 'a';
console.log(v);
v = [1, 2, 3];

// watch out impllicit conversions

let a = 0;
console.log(Boolean(a));

let b = "0";
console.log(Boolean(b));

console.log(a == b); 

console.log(a === b); 

// non C-like iteration

for (let n of numbers) console.log(n);
for (let k in dict) console.log(k, dict[k]);

for (let [k, v] of Object.entries(dict)) console.log(k, v);

// functions and lambdas

function fact(n) {
    return n == 0 ? 1 : n * fact(n - 1);
}
console.log(fact(4));

const fib = function(n) {
    return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}
for (const n in [0, 1, 2, 3, 4]) console.log(fib(n));

const sq = x => x * x;
for (const n in [0, 1, 2, 3, 4]) console.log(sq(n));

// unpacking

let [a, b] = [1, 2];
console.log(a);

let {key} = dict;
console.log(key);

function echo({key}) {
    console.log(key);
}

echo(dict);

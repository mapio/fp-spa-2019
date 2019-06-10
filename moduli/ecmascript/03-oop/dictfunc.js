// functions in dicts… road to objects

function sayhi() {
    console.log('Hi', this.name);
}

let person = {
    name: 'Massimo',
    sayhi
}

person.sayhi();

let shyperson = {
    name: 'Massimo',
    sayhi: () => console.log('Hi', this.name)
}

shyperson.sayhi();

// dispatch table example

let d0 = { type: 'integer', info: 123 };
let d1 = { type: 'string', info: "hurrah!" };

function handle(d) {
    dispatch_table[d.type](d.info);
}

function handle_integer(info) {
    console.log("handling number:", info);
}

function handle_string(info) {
    console.log("handling string:", info);
}

let dispatch_table = { 'integer': handle_integer, 'string': handle_string };

handle(d0);
handle(d1);

// sugar

let d0 = { type: 'integer', info: 123 };
let d1 = { type: 'string', info: "hurrah!" };

function handle(d) {
    dispatch_table[d.type](d.info);
}

function integer(info) {
    console.log("handling number:", info);
}

function string(info) {
    console.log("handling string:", info);
}

let dispatch_table = { integer, string };

handle(d0);
handle(d1);

// even more sugar

let d0 = { type: 'integer', info: 123 };
let d1 = { type: 'string', info: "hurrah!" };

function handle(d) {
    dispatch_table[d.type](d.info);
}

let dispatch_table = {
    integer(info) {
        console.log("handling number:", info);
    },
    string(info) {
        console.log("handling string:", info);
    }
};

handle(d0);
handle(d1);


// wrong

let data = null;

function set_data() {
    setTimeout(() => data = [1, 2, 3], 100);
}

function log_data() {
    console.log(data);
}

set_data();
log_data();

// with a callback

let data = null;

function set_data_callback(callback) {
    setTimeout(() => {data = [1, 2, 3]; callback()}, 100);
}

function log_data() {
    console.log(data);
}

set_data_callback(log_data);

// promise

let data = null;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        data = [1, 2, 3];
        resolve();
    }, 100);
});

function log_data() {
    console.log(data);
}

promise.then(log_data)
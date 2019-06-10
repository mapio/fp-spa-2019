function C() {
    let data = {};

    return {
        set: function set(name, val) {
            data[name] = val;
        },
        get: function get(name) {
            return data[name];
        }
    }

}

c = C();

c.set('a', 1);
c.get('a');

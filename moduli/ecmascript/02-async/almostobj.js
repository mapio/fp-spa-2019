function make_collector() {
    let tot = 0;

    return {
        collect(x) {
            tot += x;
        },

        total() {
            return tot;
        }
    };
}

c = make_collector();

Array.prototype.map.call([1, 2, 3, 4], c.collect)

c.total()
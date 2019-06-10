let servers = [
    { name: 'dopey', ram: 4, hd: 256 },
    { name: 'doc', ram: 8, hd: 480 },
    { name: 'grumpy', ram: 16, hd: 1024 }
];

let rams0 = [];
for (const server of servers) rams0.push(server.ram);
console.log(rams0);

let rams1 = [];
servers.forEach(function(server) {
    rams1.push(server.ram);
});
console.log(rams1);

let rams2 = servers.map(server => server.ram);
console.log(rams2);

console.log(servers.filter(s => s.ram > 4));

console.log(servers.reduce((acc, curr) => acc + curr.hd, 0));
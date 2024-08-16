/*
    GLORY BE TO GOD,
    TRIP-MATE,
    By Galaxy Geeks
*/

const json_server = require('json-server');
const server      = json_server.create();

const fs        = require('fs');
const path      = require('path');
const file_path = path.join('destinations.json');
const data      = fs.readFileSync(file_path, "utf-8");
const database  = JSON.parse(data);
const router    = json_server.router(database);

const middle_wares = json_server.defaults();

server.use(middle_wares);
server.use(json_server.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}));
server.use(router);

server.listen(3000, function() {
    console.log("trip-mate log: json-server is running!");
});

module.exports = server;
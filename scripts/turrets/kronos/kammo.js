//Ammo
var calc = require("calculations");
var stats = require("status");
const techium = extend(BasicBulletType,"techium",{
    damage: 900,
    speed: 5,
    lifetime: calc.life(60,5),
    status: stats.shortCircuit,
    statusDuration: 60,
    pierce: true,
    pierceCap: 3,
});
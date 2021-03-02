//Ammo
var stats = require("status");

const techium = extend(BasicBulletType,"techium",{
    damage: 900,
    speed: 5,
    lifetime: 96,
    pierce: true,
    pierceCap: 3,
    status: stats.shortCircuit,
    statusDuration: 60
});
//Ammo
var calc = require("calculations");
var stats = require("status");

const techium = extend(BasicBulletType,"techium",{
    damage: 900,
    speed: 5,
    lifetime: calc.life(60,5),
    pierce: true,
    pierceCap: 3,
});
techium.status = stats.shortCircuit;
techium.statusDuration = 60;
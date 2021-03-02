//imports
var calc = require("calculations");
var ammo = require("kammo");
//the turret
const kronos = extend(ItemTurret,"kronos",{
    localizedName: "Kronos",
    description: "TO-DO",
    health: 2045,
    range: calc.rangeCalc(65),
    reloadSpeed: 120,
    rotatespeed: 2,
    inaccuracy: 0.05,
    recoil: 8,
    restitution: 0.002,
    buildVisibility: buildVisibility.shown
})
//I'm still gonna implement ammos only l8er
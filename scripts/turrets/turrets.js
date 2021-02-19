//Ok, first js turrets. h
//imports
import * as ammo from 'ammo.js'
// The spark-class turrets
const spark = extend(ItemTurretType,'fireSide',{
    health = 2300,
    range = 400,
    maxAmmo = 10,
    size = 3,
    reloadTime = 60,
    rotatespeed = 2,
});
const bolt = extend(ItemTurretType,'bolt',{
    health = 5400,
    range = 440,
    maxAmmo = 10,
    size = 4,
    reloadTime = 120,
    rotatespeed = 2.5
});

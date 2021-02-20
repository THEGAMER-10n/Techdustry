//Ok, first js turrets. h
//imports
import * as ammo from 'ammo.js'
// The spark-class turrets
const spark = extend(ItemTurretType,'spark',{
    health : 2300,
    range : 400,
    maxAmmo : 10,
    size : 3,
    reloadTime : 60,
    rotatespeed : 2,
});
spark.requirements = itemStack(Items.copper,750,Items.lead,850,Items.titanium,300,Items.techium,760);

const bolt = extend(ItemTurretType,'bolt',{
    health : 5400,
    range : 440,
    maxAmmo : 10,
    size : 4,
    reloadTime : 120,
    rotatespeed : 2.5,
});
bolt.requirements = itemStack(Items.copper,1200,Items.lead,1750,Items.titanium,2450,Items.techium,1000);
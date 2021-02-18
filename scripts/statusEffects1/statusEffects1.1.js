//Operations

let chooser = Math.round(Math.random()*2);

/*status effects*/
//shortCircuit code
const shortCircuit1 = extend(StatusEffect, 'shortCircuit1',{
    damage = Math.round(Math.random()*10),
    speedMultiplier = Math.round(Math.random()*10),
    armorMultiplier = Math.round(Math.random()*5)
});
const shortCircuit2 = extend(StatusEffect, 'shortCircuit2',{
    damage = 1,
    speedMultiplier = 0.2,
    armorMultiplier = Math.round(Math.random()*10),
});
const shortCircuit3 = extend(StatusEffect, 'shortCircuit3',{
    damage = 999999999999999999999999999999999999999999
})
if(chooser === 1){
    let shortCircuit = shortCircuit1
} else if(chooser === 2){
    let shortCircuit = shortCircuit2
} else {
    let shortCircuit = shortCircuit3
}
//slowed
const slowed = extend(StatusEffect, 'slowed',{
    damage = 0,
    speedMultiplier = 0.2,
});
//frozen
const frozen = extend(StatusEffect, 'frozen',{
    speedMultiplier = 0,
    armorMultiplier = 2
});

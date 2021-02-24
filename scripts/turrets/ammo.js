//kronos ammo
const kronosSurge = extend(BasicBulletType,"kronosSurge",{
    damage: 900,
    length: 8,
    width: 3,
    speed: 6,
    //lifetime: 
    //effect: 
    //effectDuration:
    ammoMultiplier: 0.5,
});
const kronosTechium = extend(BasicBulletType,"kronosTechium",{
    damage: 850,
    length: 8,
    width: 3,
    speed: 5,
    //lifetime:
    //effect:
    //effectDuration:
});
const kronosPureTechium = extend(BasicBulletType,"kronosPureTechium",{
    damage: 950,
    length: 8,
    width: 3,
    speed: 5,
    //lifetime:
    //effect:
    //effectDuration:
    ammoMultiplier: 1/5
})
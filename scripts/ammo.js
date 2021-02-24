//imports
require("scripts/statusEffects")
//kronos ammo
const kronosSurge = extend(BasicBulletType,"kronosSurge",{
    damage = 980,
    speed = 6,
    //lifetime = 
    effect = Effects.shock,
    knockback = 5,
})
const kronosTechium = extend(BasicBulletType,"kronosTechium",{
    damage = 850,
    speed = 6,
    //lifeTime = 
    effect = shortCircuit,
    effectDuration = 600,
    knockback = 2,
    pierce = true,
    pierceCap = 3,
})
const kronosPureTechium = extend(BasicBulletType,"kronosPureTechium",{
    damage = 1000,
    speed = 5,
    //lifetime = 
    effect = shortCircuit,
    effectDuration = 3000,
    knockback = 6,
    pierce = true,
    pierceCap = 5,
    width = 3,
    height = 6
})
//Calculations

//import statusEffects
import * as effects from '/statusEffects/statusEffects1.js'
//Bullet ammo's

//spark bullets
const s_techium = extend(BasicBulletType, 's-techium',{
    damage : 750,
    pierce : true,
    pierceCap : 3,
    speed : 5,
    status : effects.shortCircuit
});
const s_graphite = extend(BasicBulletType, 's-graphite',{
    damage : 900,
    speed : 5,
});
const s_pTechium = extend(BasicBulletType, 's-pTechium',{
    damage : 950,
    speed : 6,
    pierce : true,
    pierceCap : 5,
    status : effects.shortCircuit,
});

//bolt bullets


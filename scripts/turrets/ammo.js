//Calculations

//import statusEffects
import * as effects from '/statusEffects/statusEffects1.js'
//Bullet ammo's
const s_techium = extend(BasicBulletType, 's-techium',{
    damage : 750,
    pierce : true,
    pierceCap : 3,
    speed : 5,
    status : effects.shortCircuit
})
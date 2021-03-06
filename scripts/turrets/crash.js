const i = require("items");
const s = require("libs/stats");

const ammo1 = extend(BasicBulletType,{
    damage: 75,
    speed: 5,
    lifetime: 75,
    pierce: true,
    pierceCap: 3,
});
const ammo2 = extend(BasicBulletType,{
    damage: 60,
    speed: 6,
    lifetime: 60
})
const ammo3 = extend(BasicBulletType,{
    damage: 50,
    speed: 5,
    lifetime: 75,
    effect: s.shortCircuit,
    effectDuration: 600
})

const crash = extend(ItemTurret,"crash",{
    localizedName: "Crash",
    description: "A burst turret made for frontline defence.",
    range: 320,
    health: 1350,
    size: 3,
    reloadTime: 45,
    rotateSpeed: 5,
    shootCone: 15,
    shots: 5,
    burstSpacing: 5,
    inaccuracy: 5,
    requirements: ItemStack.with(
        i.pTechium,90,
        Items.titanium,450,
        Items.thorium,120,
        Items.lead,500
    ),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown
});

crash.ammo(
    i.techium,ammo1,
    Items.silicon,ammo2,
    i.pTechium,ammo3
)
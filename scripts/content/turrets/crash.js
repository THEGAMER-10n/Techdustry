const f = require("func");

const ammo1 = extend(BasicBulletType,{
    damage: 540,
    speed: 5,
    lifetime: 75,
    pierce: true,
    pierceCap: 3,
});
const ammo2 = extend(BasicBulletType,{
    damage: 500,
    speed: 6,
    lifetime: 60
})

const crash = extend(ItemTurret,"crash",{
    range: 320,
    health: 1350,
    size: 3,
    rotateSpeed: 1.5,
    shootCone: 15,
    shots: 5,
    burstSpacing: 60,
    inaccuracy: 1,
    requirements: ItemStack.with(
        f.findItem("pTechium"),90,
        Items.titanium,450,
        Items.thorium,120,
        Items.lead,500
    ),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown
});

crash.ammo(
    f.findItem("techium"),ammo1,
    Items.silicon,ammo2
)
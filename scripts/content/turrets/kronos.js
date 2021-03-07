const f = require("func");
const s = require("stats");

const ammo1 = extend(BasicBulletType,{
    damage: 500,
    speed: 5,
    lifetime: 130,
    pierce: true,
    pierceCap: 10,
    homingRange: 20,
    homingPower: 0.5,
    effect: s.kronos1,
    effectDuration: 600
});

const kronos = extend(ItemTurret,"kronos",{
    localizedName: "Kronos",
    description: "A turret that is made for destroying high-level units.",
    range: 640,
    health: 7000,
    size: 4,
    reloadTime: 300,
    rotateSpeed: 15,
    shootCone: 20,
    shootShake: 1,
    maxAmmo: 10,
    ammoPerShot: 10,
    requirements: ItemStack.with(
        f.findItem("pTechium"),5500,
        f.findItem("fTechium"),3340,
        f.findItem("sTechium"),1000,
        Items.surgeAlloy,1300,
        Items.plastanium,1750,
        Items.thorium,2140,
        Items.silicon,5000,
        Items.titanium,5500,
        Items.phaseFabric,3400
    ),
    category: Category.turret,
    buildVisibility: BuildVisibility.shown
});

kronos.ammo(
    f.findItem("sTechium"),ammo1
);
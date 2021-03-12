const i = require("items");
const s = require("libs/stats");

const kronosShoot = new Effect(30,e => {
    draw.stroke(e.fin()*3);
})

const ammo1 = extend(BasicBulletType,{
    damage: 500,
    speed: 5,
    lifetime: 130,
    pierce: true,
    pierceCap: 10,
    homingRange: 20,
    homingPower: 0.5,
    effect: s.kronosEffect,
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
        i.pTechium,5500,
        i.fTechium,3340,
        i.sTechium,1000,
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
    i.sTechium,ammo1
);
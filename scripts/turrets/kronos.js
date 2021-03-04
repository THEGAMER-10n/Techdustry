//imports
const stats = require("status");
const i = require("items")
//actual turret itself
const kronos = extend(ItemTurret,"kronos",{
    localizedName: "Kronos",
    description: "TO-DO",
    health: 2045,
    range: 480,
    size: 4,
    reloadSpeed: 120,
    rotateSpeed: 2,
    inaccuracy: 0.05,
    recoilAmount: 8,
    restitution: 0.002,
    buildVisibility: BuildVisibility.shown,
    requirements: ItemStack.with(
        Items.thorium,1980,
        Items.titanium,2000,
        Items.plastanium,1670,
        Items.surgeAlloy,1350,
        i.techium,3450
    ),
    category: Category.turret,
    maxAmmo: 10,
    ammoPerShot: 2
});

const techiumAmmo = extend(BasicBulletType,{
    damage: 900,
    speed: 5,
    lifetime: 100,
    pierce: true,
    pierceCap: 3,
    status: stats.shortCircuit,
    statusDuration: 60
});
const pTechiumAmmo = extend(BasicBulletType,{
    damage: 950,
    speed: 5,
    lifetime: 100,
    pierce: true,
    pierceCap: 5,
    status: stats.shortCircuit,
    statusDuration: 120
});

kronos.ammo(
    i.techium,techiumAmmo,
    i.pTechium,pTechiumAmmo
);
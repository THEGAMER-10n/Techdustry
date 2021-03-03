//imports
const stats = require("status");
const func = require("functions")
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
        Items.thorium,800,
        Items.titanium,925,
        Items.plastanium,970,
        Items.surgeAlloy,1350,
        func.findItem("techium"),870,
        func.findItem("pTechium"),940,
        func.findItem("fTechium"),750
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
    func.findItem("techium"),techiumAmmo,
    func.findItem("pTechium"), pTechiumAmmo
);
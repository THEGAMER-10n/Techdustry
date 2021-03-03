//imports
var items = require("items")
var stats = require("status");
//ammo
const techium = extend(BasicBulletType,"techium",{
    damage: 900,
    speed: 5,
    lifetime: 96,
    pierce: true,
    pierceCap: 3,
    status: stats.shortCircuit,
    statusDuration: 60
});
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
    requirements: ItemStack.with(Items.copper,10),
    category: Category.turret,
    maxAmmo: 10,
    ammoPerShot: 2
});
kronos.ammo = ItemStack.with(
    items.techium,ammo.techium
)
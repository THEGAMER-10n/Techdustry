//imports
var ammo = require("turrets/kronos/kammo");
var items = require("items")
//the turret
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
    requirements: ItemStack.with(Items.copper),
    category: Category.turret,
    maxAmmo: 10,
    ammoPerShot: 2
});
//ammo
kronos.ammo = ItemStack.with(
    items.techium,ammo.techium
)
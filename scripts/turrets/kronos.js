//imports
const stats = require("status");
function Item(item){
    return Vars.content.getByName(ContentType.item,"tech-" + item)
};
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
        Item("techium"),865,
        Item("pTechium"),760
    ),
    category: Category.turret,
    maxAmmo: 10,
    ammoPerShot: 2
});

const techiumAmmo = extend(BasicBulletType,"techiumAmmo",{
    damage: 900,
    speed: 5,
    lifetime: 96,
    pierce: true,
    pierceCap: 3,
    status: stats.shortCircuit,
    statusDuration: 60
});
const pTechiumAmmo = extend(BasicBulletType,"pTechiumAmmo",{
    damage: 950,
    speed: 5,
    lifetime: 100,
    pierce: true,
    pierceCap: 5,
    status: stats.shortCircuit,
    statusDuration: 120
});

kronos.ammo(
    Item("techium"),techiumAmmo,
    Item("pTechium"), pTechiumAmmo
)
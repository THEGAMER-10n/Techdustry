//imports
let item = require("scripts/items");
let a = require("ammo");

//the actual turret
const kronos = extend(ItemTurret,"kronos",{
    health: 3400,
    size: 4,
    range: 60*8,
    reloadSpeed: 5*60,
    rotateSpeed: 1.5,
    targetAir: true,
    targetGround: true,
    recoil: 5,
    restitution: 1,
    maxAmmo: 10,
    ammoPerShot: 5,
    requirements: ItemStack.with(
        item.techium,560,
        item.pTechium,890,
        item.sTechium,120,
        Items.lead,980,
        Items.silicon,765,
        Items.titanium,450,
        Items.thorium,685
    ),
    category: Category.turret
});
kronos.ammoTypes(
    item.techium,a.kronosTechium,
    item.pTechium,a.kronosPureTechium,
    Items.surgeAlloy,a.kronosSurge
);
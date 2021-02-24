//imports
require("ammo");
require("scripts/tree");
//turrets
const kronos = extend(ItemTurret,"kronos",{
    health: 2450,
    range: 65*8,
    size: 4,
    rotateSpeed: 1.5,
    targetAir: true,
    targetGround: true,
    recoil: 5,
    restitution: 0.1,
    //requirements
    requirements: ItemStack.with(Items.copper,1),
    maxAmmo: 10,
    /*ammoTypes: (
        Items.surgeAlloy,kronosSurge,
        techium,kronosTechium,
        pTechium,kronosPureTechium
    )*/
});
node(Blocks.coreShard, kronos, ItemStack.with(Items.copper,1));
const f = require("func");

const sTProd = extend(GenericSmelter,"sTProd",{
    health: 1500,
    size: 4,
    outputItem: ItemStack.with(f.findItem("sTechium"),1),
    requirements: Itemstack.with(
        f.findItem("pTechium"),100,
        f.findItem("fTechium"),95,
        Items.surgeAlloy,100,
        Items.plastanium,250,
        Items.metaglass,200,
        Items.thorium,175,
        Items.copper,550,
        Items.lead,750,
        Items.silicon,500,
        Items.graphite,650
    ),
    category: Category.crafting,
    buildVisibity: BuildVisibility.shown,
    craftTime: 600
});

sTProd.consumes.items(ItemStack.with(
    f.findItem("fTechium"),5,
    Items.silicon,50,
    Items.thorium,5,
    Items.lead,25,
    Items.plastanium,15,
    Items.surgeAlloy,2
));

sTProd.consumes.power(25);
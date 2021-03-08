const i = require("content/items");

const fTProd = extend(GenericSmelter,"fTProd",{
    localizedName: "Techium Fabricator",
    description: "Weaves strands of pure techium.",
    health: 1300,
    size: 2,
    craftTime: 60,
    requirements: ItemStack.with(
        i.pTechium,150,
        Items.titanium,250,
        Items.thorium,75,
        Items.copper,350,
        Items.lead,300
    ),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown,
    outputItem: ItemStack.with(i.fTechium,1)
});

fTProd.drawWeave()

fTProd.consumes.items(ItemStack.with(
    i.fTechium,5
));
fTProd.consumes.power(50);
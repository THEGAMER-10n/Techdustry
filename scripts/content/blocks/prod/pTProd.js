const f = require("func");

const pProd = extend(GenericCrafter,"pProd",{
    localizedName: "Techium Purifier",
    description: "Heats techium to purify it. Requires slag and power to run.",
    size: 2,
    health: 250,
    craftTime: 120,
    requirements: ItemStack.with(
        Items.copper,300,
        Items.titanium,90,
        Items.lead,500
    ),
    category: Category.crafting,
    buildVisibility: BuildVisibility.shown,
    outputItem: ItemStack.with(f.findItem("pTechium"),1)
})

pProd.consumes.power(8.5);
pProd.consumes.items(ItemStack.with(
    f.findItem("techium"),2
));
pProd.consumes.liquid(LiquidStack.with(
    Liquids.slag,640
));
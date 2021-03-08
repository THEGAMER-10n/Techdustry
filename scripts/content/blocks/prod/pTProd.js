const f = require("func");

const pTProd = extend(GenericCrafter,"pTProd",{
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
    outputItem: ItemStack.with(f.findItem("pTechium"),1),
    hasPower: true,
    hasItems: true,
    hasLiquids: true,
});

pTProd.consumes.item(
    f.findItem("techium"),1
);
pTProd.consume.power(
    50/60.0
);
pTProd.consume.liquid(
    Liquids.slag,40/60.0
);
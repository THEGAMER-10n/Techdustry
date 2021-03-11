const i = require("items");

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
    outputItem: new ItemStack(i.pTechium,1),
    hasPower: true,
    hasItems: true,
    hasLiquids: true,
});

pTProd.consumes.item(
    i.techium,2
);
pTProd.consumes.power(
    0.80
);
pTProd.consumes.liquid(
    Liquids.slag, 0.70
);

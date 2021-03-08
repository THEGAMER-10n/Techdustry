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
    consumeItems: ItemsStack.with(
        f.findItem("techium"),2
    ),
    consumePower: 9,
    consumeLiquid: LiquidStack.with(
        Liquids.slag,8
    )
})
const i = require("content/items");
const c = require("colors")

const weaveEffect = new Effect(30, e => {
    Lines.stroke(e.fin()*3);
    Lines.circle(e.x,e.y,e.fout()*15)
});

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
    outputItem: new ItemStack(i.fTechium,1),
});
fTProd.consumes.item(
    i.pTechium, 5
);
fTProd.consumes.power(1.6);
fTProd.drawer = new DrawWeave();
fTProd.craftEffect = weaveEffect;
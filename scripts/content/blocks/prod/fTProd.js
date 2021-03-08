const i = require("content/items");

const weaveEffect = new Effect(25,e => {
    Draw.color(Color.valueOf("#2c2771")),
    Lines.stroke(e.fout()*2),
    Lines.circle(e.fin()*25)
})

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

const fabrication = new Effect
fTProd.drawer = new DrawWeave();
fTProd.craftEffect = weaveEffect
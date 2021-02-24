//imports
require("campaign");
//Items
const techium = Item("techium");
const pTechium = Item("pTechium");
const sTechium = Item("sTechium");
const fTechium = Item("fTechium");

//ItemStats
techium.localizedName = "Techium";
techium.description = "The most basic form of techium";
techium.hardness = 3;
techium.radioactivity = 0.95;
techium.explosiveness = 0.75;
techium.charge = 0.25;

pTechium.localizedName = "Pure Techium";
pTechium.description = "The purified version of techium.";
pTechium.radioactivity = 0.70;
pTechium.explosiveness = 0.60;
pTechium.charge = 0.50;

fTechium.localizedName = "Fabricated Techium";
fTechium.description = "A cloth-like techium that is less reactive than other techium versions."
fTechium.radioactivity = 0.50;
fTechium.explosiveness = 0.10;
fTechium.charge = 0.75

sTechium.localizedName = "Techium Fiberglass";
sTechium.description = "Fibers of techium woven together to form a hard, highly conductive material"
sTechium.radioactivity = 0.25;
sTechium.charge = 1;

//research
node(Items.copper, techium, ItemStack.with(Items.copper,890000,Items.lead,1000000,Items.silicon,1540000,Items.titanium,980000),Seq.with(new Objectives.produce(Items.titanium)));
node(techium,pTechium,ItemStack.with(Items.lead,2450000,Items.silicon,3130000,Items.titanium,2000000,techium,4500000));
node(pTechium, fTechium, ItemStack.with(pTechium,4500000,techium,5000000,Items.phaseFabric,2540000,Items.silicon,4500000));
node(fTechium,sTechium,ItemStack.with(fTechium,5000000,Items.metaglass,10000000,Items.surgeAlloy,100000));
//imports
const res = require("functions")
//functions
function newItem(name,color,cost,flamability,radioactivity,explosiveness,charge){
    const item = extendContent(Item, name, {});
    item.color = Color.valueOf(color);
    item.cost = cost
    item.flamability = flamability
    item.radioactivity = radioactivity
    item.explosiveness = explosiveness
    item.charge = charge
}
//techium
const techium = newItem("techium","#8dabc9",0.0,0.0,0.75,1,0.5);
const pTechium = newItem("pTechium","#4e8cca",0.0,0.0,0.60,0.45,0.6);
const fTechium = newItem("fTechium","#27598b",0.0,0.0,0.25,0.0,0.75);
const sTechium = newItem("sTechium","#0057ad",0.0,0.0,0.0,0.0,1);
//research
res.node(Items.titanium,techium,ItemStack.with(Items.copper,350000,Items.lead,47500,Items.titanium,45750,Items.silicon,850000));
res.node(techium,pTechium,ItemStack(Items.techium,995000,Items.titanium,1020000,Items.lead,1230000,Items.silicon,1560000));
res.node(pTechium, fTechium, ItemStack.with(pTechium,1300000,techium,2000000,Items.phaseFabric,1805670,Items.silicon,2350000));
res.node(fTechium,sTechium,ItemStack.with(fTechium,3520000,pTechium,3500000,Items.metaglass,4560000,Items.surgeAlloy,1350000));
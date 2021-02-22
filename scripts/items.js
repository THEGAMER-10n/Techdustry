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
const sTecium = newItem("sTechium","#0057ad",0.0,0.0,0.0,0.0,1);
//research
res.node(Blocks.coreShard,techium,ItemStack.with(Items.copper,1))
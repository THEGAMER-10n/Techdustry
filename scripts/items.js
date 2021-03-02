//Items go here
function item(item,cost,hardness,explosiveness,flamability,radioactivity,charge){
    const I = Item(item);
    I.cost = cost;
    I.hardness = hardness;
    I.explosiveness = explosiveness;
    I.flamability = flamability;
    I.radioactivity = radioactivity;
    I.charge = charge;
    return(I)
}

const techium = item("techium",0.0,2,0.95,0.0,0.85,0.05);
techium.localizedName = "Techium";
techium.description =  "Basic form of all types of techium technologies.";

const pTechium = item("pTechium",1.5,3,0.25,0.0,0.65,0.45);
pTechium.localizedName = "Purified Techium";
pTechium.description = "Purified techium. Enhanced conductive properties";

const fTechium = item("fTechium",2,0.0,0.0,0.0,0.25,0.75);
fTechium.localizedName = "Fabricated Techium";
fTechium.description = "The fabricated version of techium.";

const sTechium = item("sTechum",1,3.0,0.0,0.0,0.15,1);
sTechium.localizedName = "Techium Fiberglass";
sTechium.description = "A processed techium that has a very high conduction and small electrical resistance. It is also a very strong material.";

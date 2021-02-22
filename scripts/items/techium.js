//imports
let r = require("scripts/research")
//------------
const techium = Item("techium");

techium.localizedName = "Techium"
techium.description = "The raw form of all techium technologies. Highly explosive.";

techium.radioactivity = 0.65;
techium.explosiveness = 1;
techium.charge = 0.75;

techium.color = Color.valueOf("#88A7B8")

r.research1(Blocks.coreShard,techium,ItemStack.with(Items.copper,1));

const techium = Item("techium");

techium.localizedName = "Techium"
techium.description = "The raw form of all techium technologies. Highly explosive.";

techium.radioactivity = 0.65;
techium.explosiveness = 1;
techium.charge = 0.75;

TechTree.TechNode(Block.coreShard,techium,ItemStack.with(Item.copper,1))
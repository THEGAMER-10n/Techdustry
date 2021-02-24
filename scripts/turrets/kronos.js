//imports
require("ammo");
require("scripts/tree");
//turrets
const kronos = extend(ItemTurret,"kronos");
kronos.ammo(
    Items.surgeAlloy,kronosSurge,
    techium,kronosTechium,
    pTechium,kronosPureTechium
)
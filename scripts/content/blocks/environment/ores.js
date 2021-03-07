const f = require("func");

const tOre = extend(OreBlock,"tOre",{
    itemDrop: f.findItem("techium"),
    variants: 2,
    oreDefault: true,
    oreScale: 15
});
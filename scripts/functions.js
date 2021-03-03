/**
 * 
 * @param {string} strItem name of item
 */
function findItem(strItem){
    return Vars.content.getByName(ContentType.item, "techdustry-"+ strItem)
};
/**
 * 
 * @param {string} strLiquid name of liquid
 */
function findLiqud(strLiquid){
    return Vars.content.getByName(ContentType.liquid, "techdustry-"+ strLiquid)
};
/**
 * 
 * @param {string} strUnit name of unit
 */
function findUnit(strUnit){
    return Vars.content.getByName(ContentType.unit, "techdustry-"+ strUnit)
};
/**
 * 
 * @param {string} strBlock name of block
 */
function findBlock(strBlock){
    return Vars.content.getByName(ContentType.block, "techdustry-"+ strBlock)
};
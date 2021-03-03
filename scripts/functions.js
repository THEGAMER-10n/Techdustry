module.exports = {
    findItem(item){
        return(Vars.content.getByName(ContentType.item, item))
    },
    findLiquid(liquid){
        return(Vars.content.getByName(ContentType.liquid, liquid))
    },
    findBlock(block){
        return(Vars.content.getByName(ContentType.block, block))
    },
    findUnit(unit){
        return((Vars.content.getByName(ContentType.unit, unit)))
    }
}
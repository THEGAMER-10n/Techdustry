module.exports = {
    findItem(item){
        return Vars.content.getByName(ContentType.item, "tech-" + item)
    },
    findLiquid(liquid){
        return Vars.content.getByName(ContentType.liquid, "tech-" + liquid)
    },
    findBlock(block){
        return Vars.content.getByName(ContentType.block, "tech-" + block)
    },
    findUnit(unit){
        return Vars.content.getByName(ContentType.unit, "tech-" + unit)
    }
}
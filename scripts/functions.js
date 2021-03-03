module.exports = {
    findItem(item){
        return Vars.content.getByName(ContentType.item, "techdustry-" + item)
    },
    findLiquid(liquid){
        return Vars.content.getByName(ContentType.liquid, "techdustry-" + liquid)
    }
};
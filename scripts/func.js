function findItem(item){
    return Vars.content.getByName(ContentType.item,"techdustry-" + item)
}
module.exports = {
    findItem:findItem
}
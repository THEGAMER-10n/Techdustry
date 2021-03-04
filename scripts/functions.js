//the functions
function item(item,modname){
    return Vars.content.getByName(ContentType.item,modname + "-" + item)
}
module.exports = {
    findItem:item
}
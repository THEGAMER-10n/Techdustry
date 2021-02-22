module.exports = {	
    name: null, 
    techNode(parent2, block, requirements){
        var parent = TechTree.all.find(node => node.content == parent2);
        var node = new TechTree.TechNode(parent, block, requirements);
	}, 
	
    node(parent2, block, requirements, objectives){
	    var parent = TechTree.all.find(node => node.content == parent2);
	    var node = new TechTree.TechNode(parent, block, requirements);
	
	    node.objectives.add(objectives);
	}, 
}
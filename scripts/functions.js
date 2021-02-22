const node = (parent, contentType, requirements, objectives) => {
    const tnode = new TechTree.TechNode(TechTree.get(parent), contentType, requirements != null ? requirements : contentType.researchRequirements());
    let used = new ObjectSet();
    
    if(objectives != null){
        tnode.objectives.addAll(objectives);
    };
};
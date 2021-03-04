//stats
//short circuit
const shortCircuit = extend(StatusEffect,"shortCircuit",{
    update(unit,time){
        if(unit.health <= 4500){
            this.damage = unit.health/time*0.10;
            this.armorMultiplier = 3;
        }else{
            this.damage = Math.round(Math.random()*10);
            this.armorMultiplier = 3;
        }
    }
})
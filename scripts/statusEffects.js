//Here we go again.

const shortCircuit = extend(statusEffect,"shortCircuit",{
    update(unit,time){
        if(Math.random > 0.85){
            if(time > 10){
                if(time > 5){
                    this.damage = 10
                }else{
                    this.damage = 5
                }
            }else{
                this.damage = unit.health*0.1
                this.armorMultiplier = 1.5
            }
        }else{
            this.damage = unit.health*0.05
            this.armorMultiplier = 0.75
        }
    }
}); //just, don't
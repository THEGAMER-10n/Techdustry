//imports

//shortCircuit
const shortCircuit = extend(StatusEffect,"shortCircuit",{
    update(unit,time){
        if(unit.health >= 5000){
            if(time > 10){
                this.damage = unit.health*0.1
                this.speedMultiplier = unit.healthf()*0.1
            }else{
                this.damage = 500
            }
        }else{
            if(unit.speed > 10){
                this.speedMultiplier = 0.5
            }else{
                if(unit.health > 700){
                    this.damage = Math.round(Math.random()*15);
                }
            }
            this.damage = 10
        }
    }
})
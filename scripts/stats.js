const shortCircuit = extend(StatusEffect,"sC",{
    damage: Math.round(Math.random()*15),
    armorMultiplier: Math.random*1
});

const kronos1 = extend(StatusEffect,"k1",{
    update(unit,time){
        if(time > 10){
            this.speedMultiplier = 0,
            this.damage = 5,
            this.armorMultiplier = 0.5
        }else{
            if(unit.health > 1000000000){
                this.damage = unit.health*0.20,
                this.speedMultiplier = 0
                if(time >= 2){
                    unit.kill(),
                    print("Too overpowered")//I hate overpowered units
                }
            }else{
                this.damage = 10,
                this.speedMultiplier = 0
            }
        }
    }
});

module.exports = {
    shortCircuit:shortCircuit,
    kronos1:kronos1
}
const shortCircuit = extend(StatusEffect,"sC",{
    damage = Math.round(Math.random()*10),
    armorMultiplier = 0.5
})

const kronos1 = extend(StatusEffect,"k1",{
    update(unit,time){
        if(time > 10){
            this.speedMultiplier = 0,
            this.damage = 5,
            this.armorMultiplier = 0.5
        }else{
            if(unit.health > 1000000000){
                this.damage = unit.health*0.10
                if(time >= 2){
                    this.damage = Infinity
                }
            }else{
                this.damage = 10
            }
        }
    }
});

module.exports = {
    shortCircuit:shortCircuit,
    kronos1:kronos1
}
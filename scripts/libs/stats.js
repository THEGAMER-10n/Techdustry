const shortCircuit = extend(StatusEffect,"sC",{
    damage: Math.round(Math.random()*15),
    armorMultiplier: Math.random(),
    speedMultiplier: 0.25
});

const kronosEffect = extend(StatusEffect,"kronosEffect",{
    update(unit,time){
        this.super$update(unit,time);
        if(unit.health >= 1000000000){
            if(time > 2){
                this.damage = unit.health*0.35;
            }else{
                this.damage = 0.65;
                this.speedMultiplier = 0.0;
                this.armorMultiplier = Math.random();
            }
        }else{
            if(time > 5 && time < 1){
                this.damage = unit.health*25;
            }else{
                this.damage = 100;
                this.armorMultiplier = 0.25;
                this.speedMultiplier = -1; //ehhh...
            }
        }
    }
})

module.exports = {
    shortCircuit:shortCircuit,
    kronosEffect:kronosEffect
}

//range calculations
/**
 * 
 * @param {number} range the desired range of the turret
 */
function rangeCalc(range){
    let r = range*8;
    return(r)
}
//lifetime calculations
/**
 * 
 * @param {number} range range of bullet in blocks
 * @param {number} speed speed of bullet
 */
function life(range,speed){
    let l = range*8/speed;
    return(l)
}
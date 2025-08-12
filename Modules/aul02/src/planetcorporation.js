module.exports = {
    get AU_TO_SUN_KILOMETERS() {return 149597870.7; },
    ConverteAuToKm(au){
        return au * this.AU_TO_SUN_KILOMETERS;

    }
    
}

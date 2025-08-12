class Planet{

    constructor(name,SurfaceArea){

this.name = name;
        this.SurfaceArea = SurfaceArea;
    }
    rotate(){
        console.log(`${this.name} is rotating`);
    }
}
module.exports = planet;
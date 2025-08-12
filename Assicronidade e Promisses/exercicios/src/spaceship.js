class spaceship{
    constructor(name,maxcapacity,currentcharge){
        this.name = name;
        this.maxcapacity = maxcapacity;
        this.currentload = currentcharge
    }
    currentpercentload(){
        return(this.currentcharge * 100 / this.maxcapacity)
    }

}
export default spaceship
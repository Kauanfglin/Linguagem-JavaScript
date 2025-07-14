class ResourceProcessSation{
  constuctor(name,MonthlyProcessLoad){
   this.name = name;
    this.MonthlyProcessLoad = MonthlyProcessLoad
    
  }
  get WeeklyProcessLoad(){
    return this.MonthlyProcessLoad/4;
  }
}
let ResourceProcessed = new ResourceProcessSation("ResourceProcessed",1000);
console.log(ResourceProcessed.WeeklyProcessLoad);
resourceProcessed.WeeklyProcessLoad = 1000;
console.log(ResourceProcessed.WeeklyProcessLoad);
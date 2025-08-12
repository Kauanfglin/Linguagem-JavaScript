TestingArrow = {
name: "TestingArrow",
description: "A simple arrow function that returns a greeting message.",
normalFunction: function() {
    console.log(this.name);
},
arrowFunction: () => {
    console.log("Hello from " + this.name);
}




}


TestingArrow.normalFunction(); // Outputs: TestingArrow


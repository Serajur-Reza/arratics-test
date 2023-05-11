class Car {
  // name was outside constructor
  // the 'name' parameter added to constructor
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log("Car name: " + this.name);
  }

  printAssembly() {
    console.log("The Tesla Car finishes assembly every Friday at 5pm.");
  }
}

class TeslaCar extends Car {
  //parameter added
  generateAssemblyReports(text) {
    console.log("Generating assembly reports...");
    console.log("Exporting CSV format reports...");
    console.log("Printing reports...");
  }
}

// Driver code
const myCar = new TeslaCar("Model_3");
myCar.printName();
myCar.generateAssemblyReports("Excel");

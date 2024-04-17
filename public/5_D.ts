interface EngineInterface {
    start(): void;
  }
  
  class ElectricEngine implements EngineInterface {
    start() {
      console.log("Electric engine started");
    }
  }
  
  class PetrolEngine implements EngineInterface {
    start() {
      console.log("Petrol engine started");
    }
  }
  
  class Car {
    private engine: EngineInterface;
  
    constructor(engine: EngineInterface) {
      this.engine = engine;
    }
  
    startEngine() {
      this.engine.start();
    }
  }
  
  const electricCar = new Car(new ElectricEngine());
  electricCar.startEngine(); // Выведет: Electric engine started
  
  const petrolCar = new Car(new PetrolEngine());
  petrolCar.startEngine(); // Выведет: Petrol engine started
  
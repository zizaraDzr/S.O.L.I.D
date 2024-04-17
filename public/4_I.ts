// Интерфейс Animal
interface Animal {
    eat(): void;
  }
  
  // Интерфейс Flying
  interface Flying {
    fly(): void;
  }
  
  // Интерфейс Swimming
  interface Swimming {
    swim(): void;
  }
  
  // Реализация птицы
  class Bird implements Animal, Flying {
    eat() {
      console.log('Bird is eating');
    }
  
    fly() {
      console.log('Bird is flying');
    }
  }
  
  // Реализация рыбы
  class Fish implements Animal, Swimming {
    eat() {
      console.log('Fish is eating');
    }
  
    swim() {
      console.log('Fish is swimming');
    }
  }
  
  const bird = new Bird();
  bird.eat(); // Выведет: Bird is eating
  bird.fly(); // Выведет: Bird is flying
  
  const fish = new Fish();
  fish.eat(); // Выведет: Fish is eating
  fish.swim(); // Выведет: Fish is swimming
  
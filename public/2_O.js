

const percentageDiscount = (itemPrice, discountAmount) => {
    return itemPrice * (1 - discountAmount / 100);
  }
  
  const fixedDiscount = (itemPrice, discountAmount) => {
    return Math.max(0, itemPrice - discountAmount);
  }

  const minusConstDiscount = (price, discount) => {
    return price - discount
  }

  // getPrice не нуждается в модификации 
  // можно добавлять множество других функций
  
  const getPrice = (cart, discountApplier) => {
    for (let item of cart.items) {
      item.price = discountApplier(item.price, cart.discount.amount);
    }
    return cart;
  }

  const cart = {
    items: [{ name: "стул", price: 50 }],
    discount: { amount: 10 },
  };
  
  const cartDiscounted = getPrice(cart, minusConstDiscount)
  console.log(cartDiscounted.items[0].price); 

  // еще пример--------------------------
  const filterTypes = {
    all: (items) => items,
    completed: (items) => items.filter((item) => item.completed),
    incomplete: (items) => items.filter((item) => !item.completed),
  };

  const items = {
    type: 'all',
     items: [
            { completed: false, name: 'test false' },
            { completed: true, name: 'test true' }
        ]
    }

  const filterItems = () => {
    const filterFunc = filterTypes[items.type]
    return filterFunc(items.items)
  }

  console.log(filterItems())

  // -------------------------------------
  const animalSounds = {
    dog: "Woof!",
    cat: "Meow!",
    cow: "Moo!",
    duck: "Quack!",
  };

  const animalSound = (animal) => {
    return animalSounds[animal] || "Unknown animal!";
  }

console.log(animalSound('dog'))
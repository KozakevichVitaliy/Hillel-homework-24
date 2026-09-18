// #1
const queue = ['Аня', 'Богдан'];
queue.push('Віра');
queue.unshift('Гліб');

// #2
const numbers = [10, 20, 30, 40];
const firstEl = numbers.shift();
const lastEl = numbers.pop();
const sumEl = firstEl + lastEl;
// console.log(sumEl, numbers);

// #3
const tasks = [{ id: 1, title: 'Купити молоко', done: false },  {id: 2, title: 'Купити гречку', done: false }];
tasks.push({ id: 3, title: 'Купити хліб', done: false })
tasks.shift();
// console.log(tasks);

// #4
const addUser = (users, name) => {
    !users.length 
    ? users.push({ name, id: 1 }) 
    : users.push({ name, id: users[users.length - 1].id + 1 });
    // console.log(users);  
}
addUser([{ name: 'Іван', id: 1 }], 'Вован');

// #5
const numbers1 = [3, 8, 12, 5, 20];
const found = numbers1.find(number => number > 10);
// console.log(found);

// #6
const animals = ['кіт', 'собака', 'пес', 'ведмідь'];
const animal = animals.find(animal => animal.length > 5);
// console.log(animal);

// #7
const numbers2 = [4, 0, -2, 7, -9];
const num = numbers2.find(num => num < 0);
// console.log(num || 'Від\'ємних немає');


// # 8
const users = [
  { id: 1, name: 'Аня', age: 25 },
  { id: 2, name: 'Богдан', age: 17 },
  { id: 3, name: 'Віра', age: 32 },
];
{
    const { name } = users.find(user => user.id === 2);
    // console.log(name);
}

// # 9
const getUserName = (users, id) => {
    const user = users.find(user => user.id === id);
    return ('object' === typeof user) ? user.name : 'Невідомий';
} 
// console.log(getUserName(users, 3));

// # 10
const products = [
  { name: 'Ноутбук', price: 30000, inStock: true },
  { name: 'Миша', price: 800, inStock: false },
  { name: 'Клавіатура', price: 2500, inStock: false },
];
{
   const { name } = products.find(product => product.inStock === false);
//    console.log(name);
}

// # 11
{
    const getCharEquality = (el) => {
        return el.charAt(0) === 'к';
    }
    const animals = ['кіт', 'собака', 'кінь', 'миша', 'корова'].filter(getCharEquality);
    // console.log(animals);
}

// # 12 
{
    const removeAll = (arr, value) => arr.filter(el => el !== value);
    const numbers = [1, 2, 1, 3, 1]
    // console.log(removeAll(numbers, 1));
}

// # 13
{
    const products = [
        { name: 'Ноутбук', price: 30000, inStock: true },
        { name: 'Миша', price: 800, inStock: false },
        { name: 'Клавіатура', price: 2500, inStock: true },
        { name: 'Килимок', price: 300, inStock: true },
    ].filter(product => product.price <= 5000);
    // console.log(products);
}

// # 14
{
    const numbers = [1, 2, 3, 4].map(number => number * number);
    // console.log(numbers);
}

// # 15
{
    const animals = ['кіт', 'собака', 'пес'].map(animal => animal.length);
    console.log(animals);
}

// # 16
{
    const prices = [100, 250].map(price => `${price} грн`);
    console.log(prices);
}

// # 17
{
    const users = [
        { id: 1, name: 'Аня', age: 25 },
        { id: 2, name: 'Богдан', age: 17 },
    ].map(user => user.name)
    console.log(users);   
}




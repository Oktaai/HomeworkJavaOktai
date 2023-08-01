// Напишите программу которая сложит все числа в заданном массиве
// выведет результат в консоль
const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];
let sum=0;
nums1.forEach(num => {
    num=sum+num 
    sum= num})
console.log(sum);


// Напишите программу которая добавит в массив namesObject объекты
// с двумя парами { name: "имя с большой буквы", nameLength: "длина имени"}
const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];
names.forEach(newmas => namesObject.push({name: newmas[0].toUpperCase()+newmas.slice(1,newmas.length), nameLenght: newmas.length}))
console.log(namesObject);

// Напишите программу которая в массив numsRes добавит объекты
// с тремя парами { number: "само число", square: "число в квадрпате", cube: "число в кубе"}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];
nums2.forEach(newnums => numsRes.push({number: newnums, square: newnums**2, cube: newnums**3}))
console.log(numsRes);


// Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];

numberRow.forEach(num => reversedNumberRow.unshift(num))
console.log(reversedNumberRow)

// Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    } 
];

cars.forEach(car => console.log(`This is ${car.color} ${car.make}. It costs ${car.price}.`))